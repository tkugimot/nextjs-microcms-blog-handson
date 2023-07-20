'use client'
import { type Article } from '@/libs/microcms'
import { Container } from '@chakra-ui/react'
import ProfileCard from '@/components/molecules/ProfileCard/ProfileCard'
import ArticleContent from '@/components/organisms/ArticleContent'

type Props = {
  data: Article
}

export default function PrivacyPolicyPage({ data }: Props) {
  return (
    <Container maxW="container.lg" paddingY={8}>
      <ArticleContent data={data} />
    </Container>
  )
}
