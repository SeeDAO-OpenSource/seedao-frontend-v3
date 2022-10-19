import { Box } from '@chakra-ui/react'
import { useEnv } from '~/hooks/useEnv'

export default function Govern() {
  const { FORUM_URL } = useEnv()
  return <Box as="iframe" src={FORUM_URL} w="full" h="full" flex={1} />
}
