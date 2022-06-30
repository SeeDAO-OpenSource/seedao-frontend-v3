import type { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React from 'react'

export const TodayTag: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box
      position="absolute"
      top="0"
      right="-1px"
      clipPath="polygon(0 0, 100% 0, 100% 100%)"
      bg="adorn.900"
      w="10px"
      h="10px"
      {...props}
    />
  )
}
