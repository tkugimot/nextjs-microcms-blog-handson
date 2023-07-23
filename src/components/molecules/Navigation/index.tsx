'use client'
import { Tag } from '@/libs/microcms'
import TagLinkList from '@/components/molecules/TagLinkList'
import {
  Center,
  Divider,
  HStack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

type Props = {
  tags: Tag[]
}

export default function Navigation({ tags }: Props) {
  return (
    <Center
      py={4}
      color={useColorModeValue('black', 'white')}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <VStack>
        <HStack paddingX={4}>
          <TagLinkList tags={tags} />
        </HStack>
        <Divider />
      </VStack>
    </Center>
  )
}
