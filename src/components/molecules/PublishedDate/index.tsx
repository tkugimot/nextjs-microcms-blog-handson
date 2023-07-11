import { formatDate } from '@/libs/dateutil'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  date?: string
}

export default function PublishedDate({ date }: Props) {
  const formattedDate = formatDate(date)

  return (
    <Box display="flex" gap={2}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {formattedDate}
    </Box>
  )
}
