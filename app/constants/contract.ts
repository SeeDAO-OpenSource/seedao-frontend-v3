export const SGN_CONTRACT_DEFAULT_ADDRESS =
  '0x883555EBb9eDF7b4c448387A4E3114418A130D55'

export function getContractEnv() {
  return {
    SGN_CONTRACT_ADDRESS:
      process.env.SGN_CONTRACT_ADDRESS || SGN_CONTRACT_DEFAULT_ADDRESS,
  }
}

export type ContractEnv = ReturnType<typeof getContractEnv>
