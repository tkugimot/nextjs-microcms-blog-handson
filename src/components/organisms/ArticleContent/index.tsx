import { type Article } from '@/libs/microcms'
import styles from './index.module.css'
import { formatRichText } from '@/libs/formatRighTextUtil'
import PublishedDate from '@/components/molecules/PublishedDate'
import { Center, Text } from '@chakra-ui/react'
import { useLocale, useTranslations } from 'use-intl'
import SnsShareButtons from '@/components/molecules/SnsShareButtons/SnsShareButtons'

type Props = {
  data: Article
}

export default function ArticleContent({ data }: Props) {
  const t = useTranslations('Index')
  const locale = useLocale()
  const englishPageDoesNotExist = locale === 'en' && data.title_en === undefined

  return (
    <>
      {englishPageDoesNotExist ? (
        <Center pb={8}>
          <Text align={'center'} fontSize={'2xl'} as={'b'}>
            The English version of this page is under preparation.
          </Text>
        </Center>
      ) : (
        <main className={styles.main}>
          <h1 className={styles.title}>
            {locale === 'en' ? data.title_en : data.title_ja}
          </h1>
          <p className={styles.description}>
            {locale === 'en' ? data.description_en : data.description_ja}
          </p>
          <div className={styles.meta}>
            <PublishedDate
              publishedAt={data.publishedAt}
              revisedAt={data.revisedAt}
            />
          </div>
          {data.thumbnail && (
            <picture>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
              />
              <img
                src={data.thumbnail?.url}
                alt=""
                className={styles.thumbnail}
                width={data.thumbnail?.width}
                height="auto"
              />
            </picture>
          )}
          <div className={styles.content_wrapper}>
            <SnsShareButtons article={data} />
            {locale === 'en'
              ? data.main_en.map((item) => (
                  <div
                    key={item.fieldId}
                    className={styles.content}
                    dangerouslySetInnerHTML={{
                      __html: `${formatRichText(item.content_en || item.html)}`,
                    }}
                  />
                ))
              : data.main_ja.map((item) => (
                  <div
                    key={item.fieldId}
                    className={styles.content}
                    dangerouslySetInnerHTML={{
                      __html: `${formatRichText(item.content_ja || item.html)}`,
                    }}
                  />
                ))}
            <SnsShareButtons article={data} />
          </div>
        </main>
      )}
    </>
  )
}
