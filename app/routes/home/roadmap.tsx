import { Box, Heading, Text, Image, Flex, Link } from '@chakra-ui/react'
import { PADDING_X, PADDING_Y } from '~/components/HomeComponents'
import { Timeline } from '~/components/Timeline'
import { HeadingWithSub } from '~/components/HeadingWithSub'
import React from 'react'

export default function Roadmap() {
  const futureTimelineItems = [
    {
      time: '2023 Q3-Q4',
      content: (
        <ul style={{ marginLeft: '30px' }}>
          <li>
            举办全球各大城市SeeDAO见面会。例如：北京、上海、杭州、深圳、洛杉矶、纽约、伦敦、东京等
          </li>
          <li>
            在某些国际化大城市建立SeeDAO的固定线下据点，让SeeDAO成为华人Web3文化的典范
          </li>
          <li>举办SeeDAO第五期与第六期黑客松，每一期都孵化出12个项目</li>
          <li>在商业上取得一定成功后，增加在学术和理论上输出和影响</li>
        </ul>
      ),
    },
    {
      time: '2023 Q1-Q2',
      content: (
        <ul style={{ marginLeft: '30px' }}>
          <li>
            举办全球各大城市SeeDAO见面会。例如：北京、上海、杭州、深圳、洛杉矶、纽约、伦敦、东京等
          </li>
          <li>
            在某些国际化大城市建立SeeDAO的固定线下据点，让SeeDAO成为华人Web3文化的典范
          </li>
          <li>举办SeeDAO第五期与第六期黑客松，每一期都孵化出12个项目</li>
          <li>在商业上取得一定成功后，增加在学术和理论上输出和影响</li>
          <li>
            完成SeeDAO B轮融资，与全球顶级的投资机构、创业组织建立广泛联系
          </li>
          <li>
            抽象出一套DAO的哲学观和方法论，将其对外输出，建立在DAO领域的深层次影响
          </li>
          <li>举办SeeDAO第三期与第四期黑客松，每一期都孵化出12个项目</li>
          <li>SGN的持有人数超过1000人，启动SeeDAO协调委员会换届选举</li>
        </ul>
      ),
    },
  ]

  const the2022TimeLineItems = [
    {
      time: '09-12 MONTH',
      content: (
        <ul style={{ marginLeft: '30px' }}>
          <li>建立SeeDAO北美据点，增加SeeDAO的北美成员比例及SGN持有者</li>
          <li>
            完善SeeDAO的治理体系与工具组合，形成教育、工作、治理、创造的良性循环
          </li>
          <li>举办SeeDAO第二期黑客松，孵化出12个项目</li>
          <li>开启SeeDAO下一轮融资</li>
        </ul>
      ),
    },
    {
      time: '05-08 MONTH',
      content: (
        <ul style={{ marginLeft: '30px' }}>
          <li>孵化器技术平台 C-Combinator 上线 成立与C-Combitor配套的SeeDAO</li>
          <li>创造者Grants基金 举办SeeDAO 第一期黑客松，孵化出12个项目</li>
          <li>
            重点吸纳来自因为各种原因离开Web2的从业者，转化为SeeDAO有生力量
          </li>
        </ul>
      ),
    },
    {
      time: '04.26',
      content: '投研公会、产品公会和翻译公会在制定换届规则',
    },
    {
      time: '04.20',
      content: 'WEB3 图书馆项目开启',
    },
    {
      time: '04.19',
      content: 'SEEDAO POAP V2 工具立项',
    },
    {
      time: '04.18',
      content: 'SEEDAO参加艺术展览，社区共创一件作品表达自我',
    },
    {
      time: '04.17',
      content: '第二次社区孵化项目路演',
    },
    {
      time: '04.12',
      content: <>《春天音乐会》 筹备</>,
    },
    {
      time: '04.11',
      content: 'ShanghaiDAO 升级为 MetaShanghai',
    },
    {
      time: '04.10',
      content: 'DeSchool 出Alpha 版本、官网V2出demo',
    },
    {
      time: '03.28',
      content: 'Azuki Cafe 项目确定社区化运营原则',
    },
    {
      time: '03.27',
      content: 'Web3 大学#100课程收官 ； SeeDAO知识沉淀 项目启动',
    },
    {
      time: '03.24',
      content: '完成SeeDAO所有过往贡献的登记和确认回溯性空投Token数量',
    },
    {
      time: '03.23',
      content: '辍学之辨，引起波澜；DeSchool 开启内测 ； 元宇宙音乐厅建设开启',
    },
    {
      time: '03.20',
      content: '确立SeeDAO抽象治理原则， 公地剧场研究所开始立项',
    },
    {
      time: '03.20',
      content: '讨论 SeeDAO 主要任务为 孵化DAO，开始孵化器技术平台开发',
    },
    {
      time: '03.13',
      content:
        'SeeDAO NFT更名为SGN (SeeDAO Genesis NFT ) ; POAP更名为 MSC（Memory of SeeDAO Contribution ）',
    },
    {
      time: '03.06',
      content: '官网V2开始设计，投研公会推进Web3 大学入门课程',
    },
    {
      time: '02.21',
      content:
        '联合登峰文社、FLOW、MASK、Matrix World、MyNFT发起古典音乐现代化大赛',
    },
    {
      time: '02.16',
      content: (
        <>
          ShanghaiDAO 元宇宙相亲活动 <br />
          <Link
            textTransform="uppercase"
            display="inline-flex"
            alignItems="center"
            target="_blank"
            fontSize="14px"
            href="https://twitter.com/see_dao/status/1492359895697412098?lang=eu"
          >
            More
            <Image
              src="/assets/svg/home-arrow.svg"
              w="14px"
              h="14px"
              ml="6px"
            />
          </Link>
        </>
      ),
    },
    {
      time: '02.13',
      content: '投研公会建立公会内部POAP体系，翻译公会建立协调小组，任期三个月',
    },
    {
      time: '01.24',
      content: '春节神秘活动',
    },
    {
      time: '01.23',
      content: (
        <>
          SeeDAO 贡献记录体系 MSC 开发完成 <br />
          <Link
            textTransform="uppercase"
            display="inline-flex"
            alignItems="center"
            target="_blank"
            fontSize="14px"
            href="https://seedao.notion.site/SGN-MSC-321d0de03808467fa2e18fd2c9be517f"
          >
            More
            <Image
              src="/assets/svg/home-arrow.svg"
              w="14px"
              h="14px"
              ml="6px"
            />
          </Link>
        </>
      ),
    },
    {
      time: '01.22',
      content: '第一次社区孵化项目路演',
    },
    {
      time: '01.19',
      content: (
        <>
          ShanghaiDAO 城隍庙抢头香 <br />
          <Link
            textTransform="uppercase"
            display="inline-flex"
            alignItems="center"
            target="_blank"
            fontSize="14px"
            href="https://mp.weixin.qq.com/s/JbmeG-azc3ptl8E9dKZDEg"
          >
            More
            <Image
              src="/assets/svg/home-arrow.svg"
              w="14px"
              h="14px"
              ml="6px"
            />
          </Link>
        </>
      ),
    },
  ]

  const the2021TimeLineItems = [
    {
      time: '12.30',
      content: (
        <>
          <Box as="span" color="adorn.900">
            SeeDAO治理架构草案
          </Box>{' '}
          发布 <br />
          <Link
            textTransform="uppercase"
            display="inline-flex"
            alignItems="center"
            target="_blank"
            fontSize="14px"
            href="https://seedao.notion.site/SeeDAO-ce6da954f0e74a44aed21a4f64af0bef"
          >
            More
            <Image
              src="/assets/svg/home-arrow.svg"
              w="14px"
              h="14px"
              ml="6px"
            />
          </Link>
        </>
      ),
    },
    {
      time: '12.28',
      content: '发生“悟恶意分叉”攻击事件',
    },
    {
      time: '12.25',
      content: 'SeeDAO 协调委员会成立，7名成员举行第一次社区会议',
    },
    {
      time: '12.30',
      content: (
        <>
          联合Y2Z成功举办{' '}
          <Box as="span" color="adorn.900">
            首届元宇宙创作者嘉年华
          </Box>{' '}
          发布
        </>
      ),
    },
    {
      time: '12.16',
      content: (
        <>
          <Box as="span" color="adorn.900">
            SeeDAO NFT和贡献徽章(POAP)指南草稿
          </Box>{' '}
          发布 <br />
          <Link
            textTransform="uppercase"
            display="inline-flex"
            alignItems="center"
            target="_blank"
            fontSize="14px"
            href="https://seedao.notion.site/SGN-MSC-321d0de03808467fa2e18fd2c9be517f"
          >
            More
            <Image
              src="/assets/svg/home-arrow.svg"
              w="14px"
              h="14px"
              ml="6px"
            />
          </Link>
        </>
      ),
    },
    {
      time: '12.16',
      content: 'SeeDAO 元宇宙建筑师公会成立',
    },
    {
      time: '12.04',
      content:
        '官网V1正式上线，开启针对CryptoC社区老用户、Bank/FF/FWB/RLY持有者的SGN空投',
    },
    {
      time: '12.02',
      content: '发起第一次社区共建者线上会议',
    },
    {
      time: '11.03',
      content: (
        <>
          <Box as="span" color="adorn.900">
            SeeDAO宣言: 基于Web3的创作者组织系统
          </Box>{' '}
          发布，SeeDAO诞生 <br />
          <Link
            textTransform="uppercase"
            display="inline-flex"
            alignItems="center"
            target="_blank"
            fontSize="14px"
            href="https://www.panewslab.com/zh/articledetails/D70251981.html"
          >
            More
            <Image
              src="/assets/svg/home-arrow.svg"
              w="14px"
              h="14px"
              ml="6px"
            />
          </Link>
        </>
      ),
    },
  ]

  return (
    <Flex w="full" h="full" py={`${PADDING_Y}px`} px={`${PADDING_X}px`}>
      <Box h="auto">
        <HeadingWithSub sub="路线图">Roadmap</HeadingWithSub>
        <Text mt="22px" mb="52px">
          在2021年，CryptoC已经积累了大量的实践。我们搭建过NFT交易平台，也运营和治理过NFT项目；我们熟悉创作者在运作DAO的过程中可能调用的各种工具，也和各大公链以及元宇宙空间建立了相应的联系；我们知道NFT项目冷启动时的历程，也知道当DAO启动后运营所需注意的事项。此外，我们还做过线上与线下展览，组织过线上和线下会议，撰写和编译了诸多文章。这些经验，对于想从Web2.0进入Web3.0世界的创作者来说是宝贵的。现在，是时候把我们的经验开放出去，交给社区了。
        </Text>

        <Heading as="h2" textTransform="uppercase" fontSize="32px" mb="30px">
          Future
        </Heading>

        <Timeline items={the2022TimeLineItems} />

        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="32px"
          mt="60px"
          mb="30px"
        >
          2022
        </Heading>

        <Timeline items={futureTimelineItems} />

        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="32px"
          mt="60px"
          mb="30px"
        >
          2021
        </Heading>

        <Timeline items={the2021TimeLineItems} />
        <Box h="40px" />
      </Box>
      <Image src="/assets/svg/roadmap-icon.svg" w="64px" h="64px" ml="46px" />
    </Flex>
  )
}
