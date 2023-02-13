import { Box, Heading, Text, Image, Flex, Link } from '@chakra-ui/react'
import { PADDING_X, PADDING_Y } from '~/components/HomeComponents'
import { Timeline } from '~/components/Timeline'
import { HeadingWithSub } from '~/components/HeadingWithSub'
import React from 'react'

export default function Roadmap() {
  const futureTimelineItems = [
    {
      time: '虚拟进军（2022.10.7-2023.10.8）',
      content: (
        <ul style={{ marginLeft: '30px' }}>
          <li>战略孵化10个项目</li>
          <li>社区规模达到2-5万人</li>
          <li>数字城邦乐高的基础完成。</li>
          <li>连接全球10+城市（城市联络人与战略合作线下空间）。</li>
          <li>贡献者数量2000+</li>
          <li>核心贡献者数量200+</li>
        </ul>
      ),
    },
    {
      time: '繁荣（2023.10.9-2024.10.9）',
      content: (
        <ul style={{ marginLeft: '30px' }}>
          <li>完成SeeDAO经济制度设计</li>
          <li>token发出</li>
          <li>战略孵化20个项目</li>
          <li>社区规模达到5-10万人</li>
          <li>
            完成数字城邦乐高的搭建。连接全球40+城市（城市联络人与战略合作线下空间）。
          </li>
          <li>贡献者数量5000+，核心贡献者数量500+</li>
          <li>在这一年，SeeDAO开始拥有除汉语之外的其他语言社区。</li>
        </ul>
      ),
    },
    {
      time: '秦（2024.10.10-2027.10.10）',
      content: (
        <ul style={{ marginLeft: '30px' }}>
          <li>大扩张。50万人。</li>
        </ul>
      ),
    },
    {
      time: '君士坦丁堡（2027.10.12-2030.10.12）',
      content: (
        <ul style={{ marginLeft: '30px' }}>
          <li>文化融合，现实影响力辐射。100万人。</li>
        </ul>
      ),
    },
  ]

  const the2022TimeLineItems = [
    {
      time: '2022.08-12',
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
  ]

  const the2021TimeLineItems = [
    {
      time: '2022.05-07',
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
      time: '2022.04.26',
      content: '投研公会、产品公会和翻译公会在制定换届规则',
    },
    {
      time: '2022.04.20',
      content: 'WEB3 图书馆项目开启',
    },
    {
      time: '2022.04.19',
      content: 'SEEDAO POAP V2 工具立项',
    },
    {
      time: '2022.04.18',
      content: 'SEEDAO参加艺术展览，社区共创一件作品表达自我',
    },
    {
      time: '2022.04.17',
      content: '第二次社区孵化项目路演',
    },
    {
      time: '2022.04.12',
      content: <>《春天音乐会》 筹备</>,
    },
    {
      time: '2022.04.11',
      content: 'ShanghaiDAO 升级为 MetaShanghai',
    },
    {
      time: '2022.04.10',
      content: 'DeSchool 出Alpha 版本、官网V2出demo',
    },
    {
      time: '2022.03.28',
      content: 'Azuki Cafe 项目确定社区化运营原则',
    },
    {
      time: '2022.03.27',
      content: 'Web3 大学#100课程收官 ； SeeDAO知识沉淀 项目启动',
    },
    {
      time: '2022.03.24',
      content: '完成SeeDAO所有过往贡献的登记和确认回溯性空投Token数量',
    },
    {
      time: '2022.03.23',
      content: '辍学之辨，引起波澜；DeSchool 开启内测 ； 元宇宙音乐厅建设开启',
    },
    {
      time: '2022.03.20',
      content: '确立SeeDAO抽象治理原则， 公地剧场研究所开始立项',
    },
    {
      time: '2022.03.20',
      content: '讨论 SeeDAO 主要任务为 孵化DAO，开始孵化器技术平台开发',
    },
    {
      time: '2022.03.13',
      content:
        'SeeDAO NFT更名为SGN (SeeDAO Genesis NFT ) ; POAP更名为 MSC（Memory of SeeDAO Contribution ）',
    },
    {
      time: '2022.03.06',
      content: '官网V2开始设计，投研公会推进Web3 大学入门课程',
    },
    {
      time: '2022.02.21',
      content:
        '联合登峰文社、FLOW、MASK、Matrix World、MyNFT发起古典音乐现代化大赛',
    },
    {
      time: '2022.02.16',
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
      time: '2022.02.13',
      content: '投研公会建立公会内部POAP体系，翻译公会建立协调小组，任期三个月',
    },
    {
      time: '2022.01.24',
      content: '春节神秘活动',
    },
    {
      time: '2022.01.23',
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
      time: '2022.01.22',
      content: '第一次社区孵化项目路演',
    },
    {
      time: '2022.01.19',
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
    {
      time: '2021.12.30',
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
      time: '2021.12.28',
      content: '发生“悟恶意分叉”攻击事件',
    },
    {
      time: '2021.12.25',
      content: 'SeeDAO 协调委员会成立，7名成员举行第一次社区会议',
    },
    {
      time: '2021.12.30',
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
      time: '2021.12.16',
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
      time: '2021.12.16',
      content: 'SeeDAO 元宇宙建筑师公会成立',
    },
    {
      time: '2021.12.04',
      content:
        '官网V1正式上线，开启针对CryptoC社区老用户、Bank/FF/FWB/RLY持有者的SGN空投',
    },
    {
      time: '2021.12.02',
      content: '发起第一次社区共建者线上会议',
    },
    {
      time: '2021.11.03',
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
    <Flex
      bg="primary.100"
      w="full"
      h="full"
      py={`${PADDING_Y}px`}
      px={`${PADDING_X}px`}
    >
      <Box h="auto">
        <HeadingWithSub sub="路线图">Roadmap</HeadingWithSub>
        <Text mt="22px" mb="52px"></Text>

        <Heading as="h2" textTransform="uppercase" fontSize="32px" mb="30px">
          五年计划
          <br />
          影响世界的大型在线游戏
        </Heading>

        <Timeline items={futureTimelineItems} />

        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="32px"
          mt="60px"
          mb="30px"
        >
          数字城邦时代
          <br />
          2022.7.6 -
        </Heading>

        <Timeline items={the2022TimeLineItems} />

        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="32px"
          mt="60px"
          mb="30px"
        >
          冒险者时代
          <br />
          2021.11 - 2022.7.6
        </Heading>

        <Timeline items={the2021TimeLineItems} />
        <Box h="40px" />
      </Box>
      <Image src="/assets/svg/roadmap-icon.svg" w="64px" h="64px" ml="46px" />
    </Flex>
  )
}
