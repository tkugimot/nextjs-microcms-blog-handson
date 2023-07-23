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
      images: [data?.thumbnail?.url || ''],
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
