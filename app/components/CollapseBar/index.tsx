import type { LinkProps } from '@chakra-ui/react'
import { Link, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link as RemixLink } from '@remix-run/react'
import { motion } from 'framer-motion'
import {
  EVENT_COLLAPSE_BAR,
  NAVIGATION_BAR_HEIGHT,
  SHADOW_BORDER,
} from '~/constants'

export const CollapseBar: React.FC<LinkProps & { to?: string }> = ({
  children,
  ...props
}) => {
  return (
    <Link
      as={RemixLink}
      display="block"
      w={`${EVENT_COLLAPSE_BAR}px`}
      minW={`${EVENT_COLLAPSE_BAR}px`}
      h="full"
      bg="primary.100"
      shadow={SHADOW_BORDER}
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
        h={`${EVENT_COLLAPSE_BAR}px`}
        pl="27px"
        transform="rotate(90deg) translateY(-100%)"
        transformOrigin="left top"
      >
        <Box>{children}</Box>
      </Flex>
    </Link>
  )
}
