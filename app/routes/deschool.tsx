import { Box } from '@chakra-ui/react'
import { useEnv } from '~/hooks/useEnv'

export default function Deschool() {
  const { DESCHOOL_URL } = useEnv()
  return (
    <Box as="iframe" src={DESCHOOL_URL} w="full" h="full" flex={1} bg="white" />
  )
}
