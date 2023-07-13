import { createClient } from 'microcms-js-sdk'
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk'
import { notFound } from 'next/navigation'

export type Tag = {
  name: string
} & MicroCMSContentId &
  MicroCMSDate

export type MainJa = {
  fieldId: string
  content_ja?: string
  html?: string
}

export type MainEn = {
  fieldId: string
  content_en?: string
  html?: string
}

export type Blog = {
  title_ja: string
  title_en?: string
  description_ja: string
  description_en?: string
  tags?: Tag[]
  main_ja: MainJa[]
  main_en: MainEn[]
  thumbnail?: MicroCMSImage
}

export type Article = Blog & MicroCMSContentId & MicroCMSDate

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// Get all articles
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: 'blogs',
      queries,
    })
    .catch(notFound)
  return listData
}

// Get each article
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: 'blogs',
      contentId,
      queries,
    })
    .catch(notFound)

  return detailData
}

// Get all tags
export const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Tag>({
      endpoint: 'tags',
      queries,
    })
    .catch(notFound)

  return listData
}

// Get each tag
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Tag>({
      endpoint: 'tags',
      contentId,
      queries,
    })
    .catch(notFound)

  return detailData
}
