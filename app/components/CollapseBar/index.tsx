import type { LinkProps } from '@chakra-ui/react'
import { Link, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link as RemixLink } from '@remix-run/react'
import { motion } from 'framer-motion'
import { NAVIGATION_BAR_HEIGHT } from '~/components/NavigationBar'

export const CollapseBar: React.FC<LinkProps & { to?: string }> = ({
  children,
  ...props
}) => {
  return (
    <Link
      as={RemixLink}
      display="block"
      w="59px"
      minW="59px"
      h="full"
      maxH={`calc(100vh - ${NAVIGATION_BAR_HEIGHT}px)`}
      bg="primary.100"
      borderRight="1px"
      borderStyle="solid"
      borderColor="secondary.900"
      overflow="hidden"
      _hover={{
        textDecoration: 'none',
      }}
      {...props}
    >
      <Flex
        as={motion.div}
        alignItems="center"
        w={`calc(100vh - ${NAVIGATION_BAR_HEIGHT}px)`}
        h="59px"
        pl="27px"
        transform="rotate(90deg) translateY(-100%)"
        transformOrigin="left top"
      >
        <Box>{children}</Box>
      </Flex>
    </Link>
  )
}
