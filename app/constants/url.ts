export function getUrlEnv() {
  const URL_KEY = [
    'TWITTER_URL',
    'DISCORD_URL',
    'NOTION_URL',
    'OPENSEA_URL',
    'MIRROR_URL',
    'DESCHOOL_URL',
    'FORUM_URL',
    'POAP_URL',
    'C_COMBINATOR_URL',
    'SERVER_URL',
  ] as const
  type UrlKey = typeof URL_KEY[number]
  const defaultUrlMap: {
    [key in UrlKey]?: string
  } = {
    TWITTER_URL: 'https://mobile.twitter.com/see_dao',
    DISCORD_URL: 'https://discord.com/invite/seedao',
    NOTION_URL:
      'https://seedao.notion.site/SEEDAO-WIKI-f57031667089473faa7ea3560d05960c',
    OPENSEA_URL: 'https://opensea.io/collection/seedaogenesis',
    MIRROR_URL: 'https://mirror.xyz/seedao.eth',
    DESCHOOL_URL: 'https://deschool.app',
    FORUM_URL: 'https://forum.seedao.xyz',
    C_COMBINATOR_URL: 'https://beta.seedao.cc',
    SERVER_URL: 'https://seedao.azurewebsites.net',
  }
  return URL_KEY.reduce(
    (acc, key) => ({
      ...acc,
      [key]: process.env[key] || defaultUrlMap[key],
    }),
    defaultUrlMap
  )
}

export type UrlEnv = ReturnType<typeof getUrlEnv>
