import React from 'react'
import type { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const ThreeDAnimation = {
  initial: {
    y: '30%',
    opacity: 0,
    zIndex: 0,
    rotateX: '-30deg',
    rotateY: '30deg',
  },
  animate: {
    y: 0,
    opacity: 1,
    rotateX: '0deg',
    rotateY: '0deg',
  },
  exit: {
    y: '10%',
    opacity: 0,
    scale: 0.75,
    zIndex: -1,
    rotateX: '0deg',
    rotateY: '0deg',
  },
}

const OpacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const StartAnimation = {
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
  variants: {
    open: () => ({
      clipPath: `circle(${2000 * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(1px at 40px 420px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  },
}

const animationMap: {
  [key: string]: typeof StartAnimation | typeof OpacityAnimation
} = {
  start: StartAnimation,
  home: OpacityAnimation,
}

export const AnimationContainer: React.FC<
  BoxProps & { animation?: string }
> = ({ children, animation = '', ...props }) => {
  const ani = animationMap[animation] || ThreeDAnimation
  return (
    <Box
      as={motion.div}
      {...ani}
      position="absolute"
      w="full"
      h="full"
      {...props}
    >
      {children}
    </Box>
  )
}
