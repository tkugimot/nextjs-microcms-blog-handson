import { Metadata } from 'next'
import { getDetail } from '@/libs/microcms'
import ArticlePage from '@/components/pages/ArticlePage'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug)

  return {
    title: data.title_ja,
    description: data.description_ja,
    openGraph: {
      title: data.title_ja,
      description: data.description_ja,
      images: [data?.thumbnail?.url || ''],
    },
  }
}

export default async function Page({ params }: Props) {
  const data = await getDetail(params.slug)
  return <ArticlePage data={data} />
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'ja' }]
}
