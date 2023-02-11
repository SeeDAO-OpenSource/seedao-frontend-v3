import whitelist11_7 from '~/assets/whitelist/treeFinal_11_7.json'

// Notice： 白名单的key必须要小写

// const whiteListArray = [{}, {}, whitelist2, whitelist3]; //dictionary of whitelist
const whiteListArray = [whitelist11_7]

/**
 * @description 判断当前地址是否在白名单并返回在第几批（0代表不在）
 * @param {string} address
 * @returns {num} 0-不在白名单  4-在第四批白
 */
export function checkIsInWhitelist(address: string) {
  if (!address) return 0
  address = address.toLocaleLowerCase()
  return whiteListArray.reduce((batchId, wl) => {
    const whitelist = Object.keys(wl.whitelist)
    const index = whitelist.findIndex(
      (addr) => addr.toLocaleLowerCase() === address
    )
    if (index >= 0) {
      return wl.key
    }
    return batchId
  }, 0)
}

export function getProof(address: string) {
  address = address.toLocaleLowerCase()
  return whiteListArray.reduce((p, wl) => {
    const whitelist = Object.keys(wl.whitelist)
    const index = whitelist.findIndex((addr) => {
      return addr.toLocaleLowerCase() === address
    })
    if (index >= 0) {
      // @ts-ignore
      return wl.whitelist[whitelist[index]]
    }
    return p
  }, [])
}
