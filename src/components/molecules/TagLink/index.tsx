import { Tag } from '@/libs/microcms'
import { Tag as ChakraTag, TagLabel } from '@chakra-ui/tag'
import Link from 'next/link'

type Props = {
  tag: Tag
}

export default function TagLink({ tag }: Props) {
  return (
    <Link key={tag.id} href={`/tags/${tag.id}`} passHref>
      <ChakraTag size="md" variant="subtle" colorScheme="cyan">
        <TagLabel fontSize="md">#{tag.name}</TagLabel>
      </ChakraTag>
    </Link>
  )
}
