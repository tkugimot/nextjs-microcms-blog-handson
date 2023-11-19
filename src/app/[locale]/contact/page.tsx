import { getDetail } from '@/libs/microcms'
import ContactPage from '@/components/pages/ContactPage'

export default async function PrivacyPolicyNextPage() {
  const data = await getDetail('privacy_policy')
  return <ContactPage />
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }]
}
