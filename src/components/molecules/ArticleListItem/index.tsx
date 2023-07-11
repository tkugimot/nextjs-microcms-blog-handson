import { Box, Heading, Stack, HStack, VStack } from '@chakra-ui/react'
import { Article } from '@/libs/microcms'
import Link from 'next/link'
import Image from 'next/image'
import PublishedDate from '../PublishedDate'

type Props = {
  article: Article
}

export default function ArticleListItem({ article }: Props) {
  return (
    <Box key={article.id}>
      <Link href={`/articles/${article.id}`}>
        <HStack spacing="24px">
          <Image
            src={article.thumbnail?.url || `/no-image.png`}
            width={250}
            height={125}
            alt="No Image"
            priority
          />
          <VStack align={'left'}>
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
            <HStack>
              <PublishedDate date={article.publishedAt} />
            </HStack>
          </VStack>
        </HStack>
      </Link>
      <Stack mt="10" mb="10" borderBottom="1px" borderColor="gray.300" />
    </Box>
  )
}
