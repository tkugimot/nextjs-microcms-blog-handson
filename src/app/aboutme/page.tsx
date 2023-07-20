import { getDetail } from '@/libs/microcms'
import AboutMePage from '@/components/pages/AboutMePage'

export default async function AboutMeNextPage() {
  const data = await getDetail('aboutme')
  return <AboutMePage data={data} />
}
