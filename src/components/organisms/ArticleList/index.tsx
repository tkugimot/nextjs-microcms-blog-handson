import ArticleListItem from '@/components/molecules/ArticleListItem'
import { Article } from '@/libs/microcms'
import { Center, Text } from '@chakra-ui/react'

type Props = {
  articles?: Article[]
}

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null
  }
  if (articles.length === 0) {
    return (
      <Center pb={8}>
        <Text align={'center'} fontSize={'2xl'} as={'b'}>
          Articles Not found.
        </Text>
      </Center>
    )
  }
  return (
    <ul>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  )
}
