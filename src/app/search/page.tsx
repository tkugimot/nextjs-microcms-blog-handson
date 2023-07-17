import { getList } from '@/libs/microcms'
import SearchPage from '@/components/pages/SearchPage'

type Props = {
  searchParams: {
    q?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const data = await getList({
    q: searchParams.q,
  })

  return (
    <>
      <SearchPage articles={data.contents} />
    </>
  )
}
