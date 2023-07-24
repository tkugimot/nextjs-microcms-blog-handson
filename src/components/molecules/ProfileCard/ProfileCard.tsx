import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { useLocale, useTranslations } from 'use-intl'

type Props = {
  hide_readmore: boolean
}

const ProfileCard = (props: Props) => {
  const t = useTranslations('Index')
  const locale = useLocale()

  return (
    <Center>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        width={'100%'}
      >
        <Image
          h={'120px'}
          w={'full'}
          src={'/tochigi.jpg'}
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'2xl'}
            src={'/profile.jpg'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Toshimitsu Kugimoto
            </Heading>
            <Text color={'gray.500'}>Software Engineer</Text>
          </Stack>
          <Stack spacing={0} align={'center'} py={8}>
            <Text style={{ whiteSpace: 'pre-line' }} color={'gray.500'}>
              {t('profileSummary')}
            </Text>
            {props.hide_readmore ? (
              <></>
            ) : (
              <>
                <NextLink href={'/' + locale + '/aboutme'}>
                  <Button colorScheme="cyan" variant="outline" size="sm" my="4">
                    {t('readMore')}
                  </Button>
                </NextLink>
              </>
            )}
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <HStack spacing={1} justify="center">
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://github.com/tkugimot"
                />
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://www.linkedin.com/in/toshimitsu-kugimoto/"
                />
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://www.facebook.com/tosimitu.kugimoto"
                />
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://twitter.com/tkugimot"
                />
                <SocialIcon
                  style={{ height: 40, width: 40 }}
                  url="https://www.instagram.com/toshimitsukugimoto/"
                />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
  )
}

export default ProfileCard
