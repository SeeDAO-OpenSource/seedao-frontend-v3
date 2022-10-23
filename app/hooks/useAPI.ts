import { API } from '~/api'
import { useMemo } from 'react'
import { useEnv } from '~/hooks/useEnv'

export function useAPI() {
  const { SERVER_URL } = useEnv()
  return useMemo(() => {
    return new API(SERVER_URL!)
  }, [SERVER_URL])
}
