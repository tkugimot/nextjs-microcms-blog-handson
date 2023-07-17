import { Box, Heading, Stack, HStack, VStack } from '@chakra-ui/react'
import { Article } from '@/libs/microcms'
import Link from 'next/link'
import Image from 'next/image'
import PublishedDate from '../PublishedDate'
import TagLinkList from '@/components/molecules/TagLinkList'

type Props = {
  article: Article
}

export default function ArticleListItem({ article }: Props) {
  return (
    <Box key={article.id}>
      <HStack spacing="24px">
        <Link href={`/articles/${article.id}`}>
          {article.thumbnail ? (
            <Image
              loader={() => `${article.thumbnail?.url}` || ''}
              src={article.thumbnail.url}
              width={250}
              height={125}
              alt="No Image"
              priority
            />
          ) : (
            <Image
              loader={() => '/no-image.png'}
              src={'/no-image.png'}
              width={250}
              height={125}
              alt="No Image"
              priority
            />
          )}
        </Link>
        <VStack align={'left'}>
          <Link href={`/articles/${article.id}`}>
            <Heading
              as="h2"
              fontSize="2xl"
              lineHeight={1.6}
              marginTop="1"
              flex={1}
              cursor="pointer"
            >
              {article.title_ja}
            </Heading>
          </Link>
          <TagLinkList tags={article.tags} />
          <HStack>
            <PublishedDate date={article.publishedAt} />
          </HStack>
        </VStack>
      </HStack>
      <Stack mt="10" mb="10" borderBottom="1px" borderColor="gray.300" />
    </Box>
  )
}
