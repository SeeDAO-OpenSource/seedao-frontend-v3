import type { ListProps } from '@chakra-ui/react'
import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export interface ScheduleListItem {
  name: string
  time: string
}

export interface ScheduleListProps extends ListProps {
  items?: ScheduleListItem[]
}

export const ScheduleList: React.FC<ScheduleListProps> = ({
  items = [],
  ...props
}) => {
  return (
    <UnorderedList
      w="full"
      fontSize="12px"
      whiteSpace="nowrap"
      listStyleType="none"
      p="0"
      m="0"
      textAlign="left"
      color="secondary.600"
      {...props}
    >
      {items.map((item, i) => (
        <ListItem
          key={i}
          display="grid"
          gridTemplateColumns="34px calc(100% - 34px)"
          gridGap="2px"
        >
          <Box>{item.time}</Box>
          <Box overflow="hidden" textOverflow="ellipsis">
            {item.name}
          </Box>
        </ListItem>
      ))}
    </UnorderedList>
  )
}
