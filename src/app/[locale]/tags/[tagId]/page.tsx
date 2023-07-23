import { getList, getTag } from '@/libs/microcms'
import { NUM_OF_PAGES_LIMIT } from '@/constants'
import TagPage from '@/components/pages/TagPage'

type Props = {
  params: {
    tagId: string
  }
}

export default async function Page({ params }: Props) {
  const { tagId } = params
  const data = await getList({
    limit: NUM_OF_PAGES_LIMIT,
    filters: `tags[contains]${tagId}`,
  })
  return <TagPage articles={data.contents} />
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'ja' }]
}
