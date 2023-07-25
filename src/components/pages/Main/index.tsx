'use client'
import { Box, useColorModeValue } from '@chakra-ui/react'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.900', 'white')}
    >
      {children}
    </Box>
  )
}
