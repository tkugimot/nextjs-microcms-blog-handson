import HomePage from '@/components/pages/HomePage'
import { NUM_OF_PAGES_LIMIT } from '@/constants'
import { getList } from '@/libs/microcms'

export default async function Home() {
  const data = await getList({
    limit: NUM_OF_PAGES_LIMIT,
  })

  return <HomePage articles={data.contents} />
}
