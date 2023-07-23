import '../globals.scss'
import { Inter } from 'next/font/google'
import { Providers } from '../providers'
import CommonHeader from '@/components/molecules/CommonHeader'
import Main from '@/components/pages/Main'
import CommonFooter from '@/components/molecules/CommmonFooter'
import { NUM_OF_PAGES_LIMIT } from '@/constants'
import { getTagList } from '@/libs/microcms'
import Navigation from '@/components/molecules/Navigation'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'https://zubora-code.net'),
  title: 'Zubora Code',
  description: 'Laziness, Impatience, and Hubris.',
  openGraph: {
    title: 'Zubora Code',
    description: 'Laziness, Impatience, and Hubris.',
    images: '/tochigi.jpg',
  },
  alternates: {
    canonical: '/',
  },
}

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  const data = await getTagList({
    limit: NUM_OF_PAGES_LIMIT,
  })

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <CommonHeader />
            <Navigation tags={data.contents} />
            <Main>{children}</Main>
            <CommonFooter />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }]
}
