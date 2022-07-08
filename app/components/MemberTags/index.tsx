import React from 'react'
import { Flex, Tag } from '@chakra-ui/react'

export const MemberTags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <Flex flexWrap="wrap" lineHeight="18px">
      {tags.map((tag, i) => (
        <Tag
          key={i}
          variant="outline"
          colorScheme="secondary"
          rounded="0"
          margin="-1px 0 0 -1px"
          color="secondary.600"
          borderColor="secondary.200"
          h="18px"
        >
          {tag}
        </Tag>
      ))}
    </Flex>
  )
}
