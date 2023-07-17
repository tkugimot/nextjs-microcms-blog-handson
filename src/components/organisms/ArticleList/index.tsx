'use client'
import ArticleListItem from '@/components/molecules/ArticleListItem'
import { Article } from '@/libs/microcms'
import { Container } from '@chakra-ui/react'

type Props = {
  articles?: Article[]
}

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>
  }
  return (
    <Container maxW="container.lg" paddingY={16}>
      <ul>
        {articles.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
    </Container>
  )
}
