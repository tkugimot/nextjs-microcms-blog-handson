'use client'
import Link from 'next/link'
import { Center, Text, useColorModeValue } from '@chakra-ui/react'
import { useLocale } from 'use-intl'

export default function CommonFooter() {
  const locale = useLocale()

  return (
    <Center
      bg={useColorModeValue('blue.100', 'blue.900')}
      color={useColorModeValue('gray.600', 'white')}
      py={8}
    >
      <footer>
        <Text pb={'4'}>
          &copy; {new Date().getFullYear()} Toshimitsu Kugimoto.
        </Text>
        <Link href={'/' + locale + '/privacy_policy'} passHref>
          <Text align={'center'} fontSize={'sm'}>
            privacy policy
          </Text>
        </Link>
      </footer>
    </Center>
  )
}
