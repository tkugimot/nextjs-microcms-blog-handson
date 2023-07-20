import { getDetail } from '@/libs/microcms'
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage'

export default async function AboutMeNextPage() {
  const data = await getDetail('privacy_policy')
  return <PrivacyPolicyPage data={data} />
}
