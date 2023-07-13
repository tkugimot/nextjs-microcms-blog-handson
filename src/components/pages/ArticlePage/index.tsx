import { type Article } from '@/libs/microcms'
import styles from './index.module.css'
import { formatRichText } from '@/libs/formatRighTextUtil'
import PublishedDate from '@/components/molecules/PublishedDate'

type Props = {
  data: Article
}

export default function ArticlePage({ data }: Props) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data.title_ja}</h1>
      <p className={styles.description}>{data.description_ja}</p>
      <div className={styles.meta}>
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      </picture>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(
            data.main_ja.content_ja ? data.main_ja.content_ja : ''
          )}`,
        }}
      />
    </main>
  )
}
