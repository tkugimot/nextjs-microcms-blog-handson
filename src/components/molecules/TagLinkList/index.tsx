import { Tag } from '@/libs/microcms'
import { Wrap, WrapItem } from '@chakra-ui/react'
import TagLink from '@/components/molecules/TagLink'

type Props = {
  tags?: Tag[]
}

export default function TagLinkList({ tags }: Props) {
  return (
    <Wrap spacing={2}>
      {tags?.map((eachTag) => (
        <WrapItem key={eachTag.id}>
          <TagLink tag={eachTag} />
        </WrapItem>
      ))}
    </Wrap>
  )
}
