'use client'
import { type Article } from '@/libs/microcms'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import ProfileCard from '@/components/molecules/ProfileCard/ProfileCard'
import ArticleContent from '@/components/organisms/ArticleContent'

type Props = {
  data: Article
}

export default function ArticlePage({ data }: Props) {
  return (
    <Container maxW="container.lg" paddingY={8}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap="3"
      >
        <GridItem rowSpan={1} colSpan={{ base: 10, md: 7 }}>
          <ArticleContent data={data} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={{ base: 10, md: 3 }}>
          <ProfileCard hide_readmore={false} />
        </GridItem>
      </Grid>
    </Container>
  )
}
