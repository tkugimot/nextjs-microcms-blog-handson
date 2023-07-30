import { Metadata } from 'next'
import { getDetail } from '@/libs/microcms'
import ArticlePage from '@/components/pages/ArticlePage'

type Props = {
  params: {
    locale: string
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug)

  return {
    title: params.locale === 'en' ? data.title_en : data.title_ja,
    description:
      params.locale === 'en' ? data.description_en : data.description_ja,
    openGraph: {
      title: params.locale === 'en' ? data.title_en : data.title_ja,
      description:
        params.locale === 'en' ? data.description_en : data.description_ja,
      images: [
        params.locale === 'en'
          ? `https://zubora-code.net/api/og?title=${data.title_en}`
          : `https://zubora-code.net/api/og?title=${data.title_ja}`,
      ],
    },
  　twitter: {
    　card: 'summary_large_image',
    　title: params.locale === 'en' ? data.title_en : data.title_ja,
    　description: params.locale === 'en' ? data.description_en : data.description_ja,
    　creator: '@tkugimot',
    　images: [
       params.locale === 'en'
          ? `https://zubora-code.net/api/og?title=${data.title_en}`
          : `https://zubora-code.net/api/og?title=${data.title_ja}`,
     ],
  　},
  }
}

export default async function Page({ params }: Props) {
  const data = await getDetail(params.slug)
  return <ArticlePage data={data} />
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }]
}
