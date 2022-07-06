import type { ReactNode } from 'react'
import React from 'react'
import type { BoxProps, HeadingProps } from '@chakra-ui/react'
import { Box, Heading } from '@chakra-ui/react'

export const HeadingWithSub: React.FC<
  HeadingProps & { sub: ReactNode; subProps?: BoxProps }
> = ({ children, sub, subProps, ...props }) => (
  <Heading as="h2" textTransform="uppercase" position="relative" {...props}>
    {children}
    <Box
      as="sup"
      fontSize="16px"
      top="-13px"
      lineHeight="16px"
      ml="8px"
      fontWeight="500"
      style={{ writingMode: 'inherit' }}
      {...subProps}
    >
      {sub}
    </Box>
  </Heading>
)
