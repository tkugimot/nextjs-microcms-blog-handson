import { getDetail } from '@/libs/microcms'
import ThanksPage from '@/components/pages/ThanksPage'

export default async function ThanksNextPage() {
  const data = await getDetail('aboutme')
  return <ThanksPage />
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }]
}
