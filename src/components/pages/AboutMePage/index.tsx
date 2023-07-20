'use client'
import { type Article } from '@/libs/microcms'
import { Container } from '@chakra-ui/react'
import ProfileCard from '@/components/molecules/ProfileCard/ProfileCard'
import ArticleContent from '@/components/organisms/ArticleContent'

type Props = {
  data: Article
}

export default function AboutMePage({ data }: Props) {
  return (
    <Container maxW="container.lg" paddingY={8}>
      <ProfileCard hide_readmore={true} />
      <ArticleContent data={data} />
    </Container>
  )
}
