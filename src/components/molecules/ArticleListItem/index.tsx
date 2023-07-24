import { Box, Heading, Stack, HStack, VStack } from '@chakra-ui/react'
import { Article } from '@/libs/microcms'
import Link from 'next/link'
import Image from 'next/image'
import PublishedDate from '../PublishedDate'
import TagLinkList from '@/components/molecules/TagLinkList'
import { useLocale } from 'use-intl'

type Props = {
  article: Article
}

export default function ArticleListItem({ article }: Props) {
  const locale = useLocale()
  const pageExists =
    (locale === 'en' && article.title_en) ||
    (locale === 'ja' && article.title_ja)

  if (!pageExists) {
    return <></>
  }

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
              unoptimized={true}
              style={{ width: '250px', height: 'auto' }}
            />
          ) : (
            <Image
              loader={() => '/no-image.png'}
              src={'/no-image.png'}
              width={250}
              height={125}
              alt="No Image"
              unoptimized={true}
              style={{ width: '250px', height: 'auto' }}
            />
          )}
        </Link>
        <VStack align={'left'}>
          <Link href={'/' + locale + '/articles/' + article.id}>
            <Heading
              as="h2"
              fontSize="2xl"
              lineHeight={1.6}
              marginTop="1"
              flex={1}
              cursor="pointer"
            >
              {locale === 'en' ? article.title_en : article.title_ja}
            </Heading>
          </Link>
          <TagLinkList tags={article.tags} />
          <PublishedDate
            publishedAt={article.publishedAt}
            revisedAt={article.revisedAt}
          />
        </VStack>
      </HStack>
      <Stack mt="10" mb="10" borderBottom="1px" borderColor="gray.300" />
    </Box>
  )
}
