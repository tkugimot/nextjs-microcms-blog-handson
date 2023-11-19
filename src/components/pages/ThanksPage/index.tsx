'use client'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function ThanksPage() {
  return (
    <Container maxW="container.lg" paddingY={8}>
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Thank You for Your Inquiry
        </Heading>
        <Text color={'gray.500'}>
          I will get back to you as soon as I confirm the details of your
          inquiry.
        </Text>
      </Box>
    </Container>
  )
}
