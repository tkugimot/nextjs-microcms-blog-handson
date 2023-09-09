import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { Article, Blog, getList } from '@/libs/microcms'
import { formatYYYYMMDD } from '@/libs/dateutil'

export async function GET(request: Request) {
  const data = await getList({
    fields: 'id,updatedAt',
  })
  const articles = data.contents

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

  return getServerSideSitemap(fields)
}
