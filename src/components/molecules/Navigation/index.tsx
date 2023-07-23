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
      py={8}
      color={useColorModeValue('black', 'white')}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <VStack>
        <HStack spacing={4} overflowX="auto" width="50%">
          <TagLinkList tags={tags} />
        </HStack>
        <Divider />
      </VStack>
    </Center>
  )
}
