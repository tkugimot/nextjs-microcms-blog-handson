'use client'
import { Container } from '@chakra-ui/react'
import ArticleList from '@/components/organisms/ArticleList'
import { Article } from '@/libs/microcms'

type Props = {
  articles?: Article[]
}

export default function HomePage({ articles }: Props) {
  return (
    <Container maxW="container.lg" paddingY={16}>
      <ArticleList articles={articles} />
    </Container>
  )
}
