import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { Article, getList, getTagList, Tag } from '@/libs/microcms'
import { formatYYYYMMDD } from '@/libs/dateutil'
import { NUM_OF_ALL_PAGES_LIMIST, NUM_OF_PAGES_LIMIT } from '@/constants'

// cache for 24 hours
export const revalidate = 86400

export async function GET(request: Request) {
  const articlesData = await getList({
    limit: NUM_OF_ALL_PAGES_LIMIST,
    fields: 'id,updatedAt',
  })
  const articles = articlesData.contents

  const tagsData = await getTagList({
    limit: NUM_OF_PAGES_LIMIT,
  })
  const tags = tagsData.contents

  const fields: ISitemapField[] = []
  articles.forEach((article: Article) => {
    ;['ja', 'en'].forEach((locale) => {
      fields.push({
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/articles/${article.id}`,
        lastmod: formatYYYYMMDD(article.updatedAt),
        priority: 1, // Priority of this URL compared to other URLs within the site.
        changefreq: 'weekly', // Page update frequency.
      })
    })
  })

  tags.forEach((tag: Tag) => {
    ;['ja', 'en'].forEach((locale) => {
      fields.push({
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/tags/${tag.id}`,
        lastmod: formatYYYYMMDD(tag.updatedAt),
        priority: 1, // Priority of this URL compared to other URLs within the site.
        changefreq: 'weekly', // Page update frequency.
      })
    })
  })

  return getServerSideSitemap(fields)
}
