import { createContext, useContext } from 'react'
import type { UrlEnv } from '~/constants/url'

export const EnvContext = createContext<UrlEnv>({})

export const useEnv = () => useContext(EnvContext)
