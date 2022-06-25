import { Box, VStack, Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export interface TimelineItem {
  time: ReactNode
  content: ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <VStack
      borderLeft="2px"
      borderStyle="solid"
      borderColor="secondary.900"
      spacing="30px"
    >
      {items.map((item, i) => (
        <Flex key={i} pl="20px" direction="column" position="relative">
          <Box
            position="absolute"
            top="0"
            left="0"
            h="2px"
            w="10px"
            bg="secondary.900"
          />
          <Box
            fontSize="16px"
            lineHeight="16px"
            fontWeight="semibold"
            mb="10px"
          >
            {item.time}
          </Box>
          <Box lineHeight="25.6px">{item.content}</Box>
        </Flex>
      ))}
    </VStack>
  )
}
