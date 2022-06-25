import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'
import { PADDING_X, PADDING_Y } from '~/components/HomeComponents'
import { Timeline } from '~/components/Timeline'
import { HomeHeading } from '~/components/HomeComponents'

export default function Roadmap() {
  const timelineItems = [
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
  ]

  return (
    <Flex w="full" h="full" py={`${PADDING_Y}px`} px={`${PADDING_X}px`}>
      <Box>
        <HomeHeading sub="路线图">Roadmap</HomeHeading>
        <Text mt="22px" mb="52px">
          在2021年，CryptoC已经积累了大量的实践。我们搭建过NFT交易平台，也运营和治理过NFT项目；我们熟悉创作者在运作DAO的过程中可能调用的各种工具，也和各大公链以及元宇宙空间建立了相应的联系；我们知道NFT项目冷启动时的历程，也知道当DAO启动后运营所需注意的事项。此外，我们还做过线上与线下展览，组织过线上和线下会议，撰写和编译了诸多文章。这些经验，对于想从Web2.0进入Web3.0世界的创作者来说是宝贵的。现在，是时候把我们的经验开放出去，交给社区了。
        </Text>

        <Heading as="h2" textTransform="uppercase" fontSize="32px" mb="30px">
          Future
        </Heading>

        <Timeline items={timelineItems} />

        <Heading
          as="h2"
          textTransform="uppercase"
          fontSize="32px"
          mt="60px"
          mb="30px"
        >
          2022
        </Heading>

        <Timeline items={timelineItems} />
      </Box>
      <Image src="/assets/svg/roadmap-icon.svg" w="64px" h="64px" ml="46px" />
    </Flex>
  )
}
