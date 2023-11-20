'use client'
import Link from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { EmailIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { TbLanguageHiragana } from 'react-icons/tb'
import { useRouter } from 'next-intl/client'
import { usePathname } from 'next-intl/client'
import { SiAboutdotme } from 'react-icons/si'
import { useLocale } from 'use-intl'

export default function CommonHeader() {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const nextLocale = locale === 'en' ? 'ja' : 'en'

  const toggleLocale = () => {
    router.push(pathname, { locale: nextLocale })
  }

  return (
    <Box bg={useColorModeValue('blue.100', 'blue.900')} px={4}>
      <Container maxW="container.lg">
        <Flex
          as="header"
          py="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href={'/' + locale} passHref>
            <Heading
              as="h1"
              fontSize="2xl"
              cursor="pointer"
              color={useColorModeValue('gray.600', 'white')}
            >
              Zubora Code
            </Heading>
          </Link>
          <HStack spacing="1px">
            <Button
              as="a"
              href={`/${locale}/contact`}
              color={useColorModeValue('black', 'white')}
              colorScheme="blue.100"
              px={'0'}
              size="lg"
            >
              <EmailIcon />
            </Button>
            <Button
              color={useColorModeValue('black', 'white')}
              colorScheme="blue.100"
              px={'0'}
              size="lg"
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <IconButton
              color={useColorModeValue('black', 'white')}
              colorScheme="blue.100"
              pr={'1'}
              onClick={toggleLocale}
              icon={<TbLanguageHiragana size={25} />}
              aria-label="Toggle language"
            ></IconButton>
            <Link href={'/' + locale + '/aboutme'} passHref>
              <IconButton
                color={useColorModeValue('black', 'white')}
                colorScheme="blue.100"
                pr={'1'}
                onClick={toggleLocale}
                icon={<SiAboutdotme size={25} />}
                aria-label="Toggle language"
              ></IconButton>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
