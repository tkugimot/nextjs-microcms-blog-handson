import { Tag } from '@/libs/microcms'
import { HStack } from '@chakra-ui/react'
import TagLink from '@/components/molecules/TagLink'

type Props = {
  tags?: Tag[]
}

export default function TagLinkList({ tags }: Props) {
  return (
    <HStack spacing={4} overflowX="auto" width="100%">
      {tags?.map((eachTag) => (
        <TagLink key={eachTag.id} tag={eachTag} />
      ))}
    </HStack>
  )
}
