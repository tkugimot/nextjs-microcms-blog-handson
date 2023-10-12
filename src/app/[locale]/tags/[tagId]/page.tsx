import { getList, getTag, getTagList } from '@/libs/microcms'
import { NUM_OF_PAGES_LIMIT } from '@/constants'
import TagPage from '@/components/pages/TagPage'

type Props = {
  params: {
    locale: string
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
  const data = await getTagList({
    limit: NUM_OF_PAGES_LIMIT,
  })

  const retList: { locale: string; tagId: string }[] = []
  data.contents.forEach((tag) => {
    retList.push(
      { locale: 'ja', tagId: tag.id },
      { locale: 'en', tagId: tag.id }
    )
  })

  return retList
}
