'use client'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useTranslations } from 'use-intl'

export default function ThanksPage() {
  const t = useTranslations('Index')

  return (
    <Container maxW="container.lg" paddingY={8}>
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          {t('thanksTitle')}
        </Heading>
        <Text color={'gray.500'}>{t('thanksMessage')}</Text>
      </Box>
    </Container>
  )
}
