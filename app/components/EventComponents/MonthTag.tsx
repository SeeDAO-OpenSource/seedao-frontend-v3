import type { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React from 'react'

export const MONTH_ABBREVIATES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]

export const MonthTag: React.FC<
  BoxProps & {
    active?: boolean
  }
> = ({ active, children, ...props }) => {
  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      w="auto"
      pl="10px"
      pr="8px"
      h="28px"
      lineHeight="28px"
      textTransform="uppercase"
      bg={active ? 'adorn.900' : 'secondary.900'}
      color="primary.100"
      textAlign="center"
      fontWeight="semibold"
      clipPath="polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 21px)"
      {...props}
    >
      {children}
    </Box>
  )
}
