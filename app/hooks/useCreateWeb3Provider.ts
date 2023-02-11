import { useEthers } from '@usedapp/core'
import { useCallback } from 'react'
import { ethers } from 'ethers'
import type { MetaMaskInpageProvider } from '@metamask/providers'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

export function useCreateWeb3Provider() {
  const { account } = useEthers()
  return useCallback(() => {
    return new ethers.providers.Web3Provider(window.ethereum as any)
  }, [account])
}
