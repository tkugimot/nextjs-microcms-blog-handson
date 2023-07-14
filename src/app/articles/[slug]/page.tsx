import { Metadata } from 'next'
import { getDetail } from '@/libs/microcms'
import ArticlePage from '@/components/pages/ArticlePage'

type Props = {
  params: {
    slug: string
  }
  searchParams: {
    dk: string
  }
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  })

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

export default async function Page({ params, searchParams }: Props) {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  })

  console.log(data)

  return <ArticlePage data={data} />
}
