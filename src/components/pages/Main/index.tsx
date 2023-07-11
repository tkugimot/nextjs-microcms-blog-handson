'use client'
import {
  Box,
  Container,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import ArticleList from '@/components/organisms/ArticleList'
import { Article } from '@/libs/microcms'

export default function Main({ children }: { children: React.ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
    >
      {children}
    </Box>
  )
}
