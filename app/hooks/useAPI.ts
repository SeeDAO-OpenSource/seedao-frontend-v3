import { API } from '~/api'
import { useMemo } from 'react'

export function useAPI() {
  return useMemo(() => {
    return new API()
  }, [])
}
