import React from 'react'
import type { FlexProps } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

export const HomePageScrollContainer = React.forwardRef<
  HTMLDivElement,
  FlexProps
>(({ children, ...props }, ref) => (
  <Flex
    overflowX="auto"
    overflowY="hidden"
    w="full"
    h="320px"
    scrollBehavior="smooth"
    ref={ref}
    border="1px solid"
    borderColor="secondary.900"
    css={{
      '&::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
        borderTop: '1px',
        borderBottom: '0',
        borderLeft: '0',
        borderRight: '0',
        borderStyle: 'solid',
        borderColor: 'var(--chakra-colors-secondary-900)',
      },
      '&::-webkit-scrollbar-track': {
        width: '4px',
        height: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'var(--chakra-colors-secondary-900)',
      },
    }}
    {...props}
  >
    {children}
  </Flex>
))
