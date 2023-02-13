import { createContext, useContext } from 'react'
import type { UrlEnv } from '~/constants/url'
import type { ContractEnv } from '~/constants/contract'
import { SGN_CONTRACT_DEFAULT_ADDRESS } from '~/constants/contract'

export const EnvContext = createContext<UrlEnv & ContractEnv>({
  SGN_CONTRACT_ADDRESS: SGN_CONTRACT_DEFAULT_ADDRESS,
})

export const useEnv = () => useContext(EnvContext)
