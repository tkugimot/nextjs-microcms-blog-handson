import { HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { useLocale } from 'use-intl'
import { Article } from '@/libs/microcms'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  HatenaShareButton,
  HatenaIcon,
  LineShareButton,
  LineIcon,
} from 'next-share'

type Props = {
  article: Article
}

const SnsShareButtons = (props: Props) => {
  const locale = useLocale()
  const tagNames = props.article?.tags?.map((tag) => tag.name)
  const hashtags = ['zuboracode', ...(tagNames ?? [])]

  return (
    <Stack my={16} direction={'row'} justify={'center'} spacing={6}>
      <Stack spacing={0} align={'center'}>
        <HStack spacing={8} justify="center">
          <TwitterShareButton
            url={`https://zubora-code.net/${locale}/articles/${props.article.id}`}
            title={
              locale === 'en' ? props.article.title_en : props.article.title_ja
            }
            via="tkugimot"
            hashtags={hashtags}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <FacebookShareButton
            url={`https://zubora-code.net/${locale}/articles/${props.article.id}`}
            quote={
              locale === 'en' ? props.article.title_en : props.article.title_ja
            }
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <LineShareButton
            url={`https://zubora-code.net/${locale}/articles/${props.article.id}`}
            title={
              locale === 'en' ? props.article.title_en : props.article.title_ja
            }
          >
            <LineIcon size={40} round={true} />
          </LineShareButton>
          <HatenaShareButton
            url={`https://zubora-code.net/${locale}/articles/${props.article.id}`}
            title={
              locale === 'en' ? props.article.title_en : props.article.title_ja
            }
          >
            <HatenaIcon size={40} round={true} />
          </HatenaShareButton>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default SnsShareButtons
