import type { ReactNode } from 'react'
import React from 'react'
import type { BoxProps } from '@chakra-ui/react'
import { Box, Center } from '@chakra-ui/react'

export const SerialNumberContainer: React.FC<
  BoxProps & { value: ReactNode }
> = ({ value, children, ...props }) => {
  return (
    <Box position="relative" {...props}>
      <Center
        w="36px"
        h="36px"
        bg="secondary.900"
        position="absolute"
        top="0"
        right="0"
        color="primary.100"
        fontSize="20px"
        fontWeight="700"
      >
        {value}
      </Center>
      {children}
    </Box>
  )
}
