export const LinkTypeSet = ['website', 'notion', 'discord'] as const
export type LinkType = typeof LinkTypeSet[number]

export interface IncubatinProject {
  title: string
  link: { [key in LinkType]?: string }
  description: string
  img: string
}

export const IncubatinProjectItems: IncubatinProject[] = [
  {
    title: 'DeSchool',
    link: {
      website: 'https://deschool.app/',
    },
    description:
      'DeSchool 是一款划时代的学习工具，其目标是探索Web3时代的教育机制，服务Web3 时代的学习者与建设者。',
    img: '/assets/png/incubatin_projects/deschool.jpeg',
  },
  {
    title: 'DAO link',
    link: {
      website: 'https://www.daolink.world/',
    },
    description:
      'DAOLink支持将Discord一键导出成一个二维的世界地图，并支持在该世界内进行音视频通讯，将DAO的交互过程视觉化、游戏化，让DAO的人际连接和互动体验更具沉浸感，成为一个具有实用价值的元宇宙活动空间。',
    img: '/assets/png/incubatin_projects/daolink.jpeg',
  },
  {
    title: 'Ensoul',
    link: {
      website: 'https://www.ensoul.io/',
    },
    description:
      'Ensoul 是一款面向 DAO 的 SBT 发行管理工具，提供灵活的权限管理方案、细颗粒度的SBT 字段描述以及丰富的开发者接口，可用于组织成员的声誉，角色和权限等的管理。',
    img: '/assets/png/incubatin_projects/ensoul.jpeg',
  },
  {
    title: 'Octopus3',
    link: {
      website: 'https://seedao.octopus3.xyz',
    },
    description:
      '八爪鱼是 DAO 后台操作系统，计划采用区块链技术实现对个人数据隐私的去中心化保护，集成DAO常用Web2、Web3 工具的集成、打通个人账户系统。计划于2023年夏季推出Alpha版本。',
    img: '/assets/png/incubatin_projects/octopus3.jpeg',
  },
  // {
  //   title: 'C-Combinator',
  //   link: {
  //     website: 'https://beta.seedao.cc/',
  //   },
  //   description:
  //     '孵化器是SeeDAO孵化业务的主要技术平台，可以帮助web3领域的创新企业加速成长，快速落地。',
  //   img: '/assets/png/incubatin_projects/c-com.jpg',
  // },
]
