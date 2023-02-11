import { useCallback, useState } from 'react'
import { Mainnet, useEthers } from '@usedapp/core'
import { useToast } from '@chakra-ui/react'
import { useEnv } from '~/hooks/useEnv'
import { checkIsInWhitelist, getProof } from '~/utils/checklist'
import { ethers } from 'ethers'
import { abi_new } from '~/abi/SeeDAONew.json'
import { useCreateWeb3Provider } from '~/hooks/useCreateWeb3Provider'

export function useMintSGN() {
  const [isMinting, setIsMinting] = useState(false)
  const {
    account,
    activateBrowserWallet,
    isLoading: isConnectingWallet,
    switchNetwork,
  } = useEthers()
  const { SGN_CONTRACT_ADDRESS } = useEnv()
  const toast = useToast()
  const createWeb3Provider = useCreateWeb3Provider()

  const mint = useCallback(
    async (address: string, batchId: number) => {
      const provider = createWeb3Provider()
      const proof = getProof(address)
      const sgnContract = new ethers.Contract(
        SGN_CONTRACT_ADDRESS,
        abi_new,
        provider.getSigner()
      )
      try {
        return sgnContract.mintWhiteList(batchId, proof)
      } catch (error: any) {
        const message = error?.error?.message || error?.message
        toast({
          title: message,
          description: `(proof=${JSON.stringify(proof)})`,
          status: 'error',
        })
      }
    },
    [account]
  )

  const onMint = useCallback(async () => {
    // connect wallet
    if (isConnectingWallet) return
    if (!account) {
      activateBrowserWallet()
      return
    }
    await switchNetwork(Mainnet.chainId)
    if (isMinting) return
    setIsMinting(true)
    const batchId = checkIsInWhitelist(account)
    if (batchId === 0) {
      toast({
        status: 'error',
        duration: 10000,
        title: '抱歉，您不在白名单中~ ',
      })
      setIsMinting(false)
      return
    }
    await mint(account, batchId)
    setIsMinting(false)
  }, [
    isConnectingWallet,
    account,
    switchNetwork,
    isMinting,
    mint,
    activateBrowserWallet,
    toast,
  ])
  return {
    onMint,
    isMinting,
    isConnectingWallet,
  }
}
