import { Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const sidebar = {
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
}

export default function Start() {
  return (
    <Center
      as={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebar}
      bg="rgba(255, 255, 255, 0.2)"
      h="full"
      flex={1}
    >
      <h1>Start</h1>
    </Center>
  )
}
