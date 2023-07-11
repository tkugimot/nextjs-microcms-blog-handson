import { formatDate } from '@/libs/dateutil'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { TimeIcon } from '@chakra-ui/icons'

type Props = {
  date?: string
}

export default function PublishedDate({ date }: Props) {
  const formattedDate = formatDate(date)

  return (
    <Box display="flex" gap={2}>
      <TimeIcon mt={1} />
      {formattedDate}
    </Box>
  )
}
