'use client'
import { Article } from '@/libs/microcms'
import ArticleList from '@/components/organisms/ArticleList'
import { Container } from '@chakra-ui/react'

type Props = {
  articles?: Article[]
}

export default function TagPage({ articles }: Props) {
  return (
    <Container maxW="container.lg" paddingY={16}>
      <ArticleList articles={articles} />
    </Container>
  )
}
