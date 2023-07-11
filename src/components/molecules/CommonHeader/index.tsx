import Link from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export default function CommonHeader() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    /* 変更　ライトモードでgray.100,ダークモードでgray.900とする。 */
    <Box bg={useColorModeValue('blue.100', 'blue.900')} px={4}>
      <Container maxW='container.lg'>
        <Flex as='header' py='4' justifyContent='space-between' alignItems='center'>
          <Link href='/' passHref>
            {/* 変更 ライトモードでgray.600、ダークモードでwhiteとする */}
            <Heading
              as='h1'
              fontSize='2xl'
              cursor='pointer'
              color={useColorModeValue('gray.600', 'white')}
            >
              Zubora Code
            </Heading>
          </Link>
          <HStack spacing='12px'>
            <Button
              color={useColorModeValue('black', 'white')}
              colorScheme='blue.100'
              px={'0'}
              size='lg'
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
