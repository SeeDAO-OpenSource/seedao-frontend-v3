import type { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

export const ScrollContainer = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        w="full"
        h="full"
        overflowX="hidden"
        overflowY="scroll"
        {...props}
      >
        {children}
      </Box>
    )
  }
)
