import { usePathname } from 'next/navigation'

export const useLocale = () => {
  const pathname = usePathname()
  const locale = pathname.includes('en') ? 'en' : 'ja'
  return { locale }
}
