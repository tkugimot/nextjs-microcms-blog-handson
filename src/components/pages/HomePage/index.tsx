import ArticleList from '@/components/organisms/ArticleList'
import { Article } from '@/libs/microcms'

type Props = {
  articles?: Article[]
}

export default function HomePage({ articles }: Props) {
  return <ArticleList articles={articles} />
}
