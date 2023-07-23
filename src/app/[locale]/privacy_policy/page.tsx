import { getDetail } from '@/libs/microcms'
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage'

export default async function PrivacyPolicyNextPage() {
  const data = await getDetail('privacy_policy')
  return <PrivacyPolicyPage data={data} />
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }]
}
