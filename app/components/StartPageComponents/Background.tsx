import type { CenterProps } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { MAX_WIDTH } from '~/constants'

export const Background: React.FC<CenterProps> = ({ ...props }) => {
  return (
    <Center
      w="full"
      h="full"
      position="absolute"
      top="0"
      left="0"
      zIndex={-1}
      px="30px"
      pointerEvents="none"
      {...props}
    >
      <Box
        w="full"
        h="inherit"
        bg="linear-gradient(90deg, var(--chakra-colors-secondary-200) 1px, transparent 0)"
        bgSize="153px 100%"
        maxW={`${MAX_WIDTH}px`}
      />
    </Center>
  )
}
