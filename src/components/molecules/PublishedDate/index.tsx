import { formatDate } from '@/libs/dateutil'
import { Box, Text } from '@chakra-ui/react'

type Props = {
  publishedAt?: string
  revisedAt?: string
}

export default function PublishedDate({ publishedAt, revisedAt }: Props) {
  const formattedPublishedAt = formatDate(publishedAt)
  const formattedRevisedAt = formatDate(revisedAt)

  return (
    <Box>
      <Text>
        Published: {formattedPublishedAt} <br></br>
        Revised: {formattedRevisedAt}
      </Text>
    </Box>
  )
}
