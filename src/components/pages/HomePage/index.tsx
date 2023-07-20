'use client'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import ArticleList from '@/components/organisms/ArticleList'
import { Article } from '@/libs/microcms'
import ProfileCard from '@/components/molecules/ProfileCard/ProfileCard'

type Props = {
  articles?: Article[]
}

export default function HomePage({ articles }: Props) {
  return (
    <Container maxW="container.lg" paddingY={8}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap="3"
      >
        <GridItem rowSpan={1} colSpan={{ base: 10, md: 7 }}>
          <ArticleList articles={articles} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={{ base: 10, md: 3 }}>
          <ProfileCard hide_readmore={false} />
        </GridItem>
      </Grid>
    </Container>
  )
}
