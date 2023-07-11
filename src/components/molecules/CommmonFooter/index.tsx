'use client'
import Link from 'next/link'
import { Center, useColorMode, Text, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function CommonFooter() {
  const { colorMode, toggleColorMode } = useColorMode()

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
        <Link href="/privacy_policy" passHref>
          <Text align={'center'} fontSize={'sm'}>
            privacy policy
          </Text>
        </Link>
      </footer>
    </Center>
  )
}
