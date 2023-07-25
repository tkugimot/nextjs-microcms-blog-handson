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
        <Link href={`${locale}/articles/${article.id}`}>
          {article.thumbnail ? (
            <Image
              src={`${article.thumbnail.url}?fm=webp&w=414 1x`}
              alt="No Image"
              width={250}
              height={125}
              unoptimized={true}
              style={{ maxWidth: '200px' }}
            />
          ) : (
            <Image
              src={'/no-image.png'}
              width={200}
              height={100}
              alt="No Image"
              unoptimized={true}
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
