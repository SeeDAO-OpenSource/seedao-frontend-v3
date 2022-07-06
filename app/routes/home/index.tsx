import {
  Box,
  Flex,
  Link,
  Text,
  Grid,
  AspectRatio,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import {
  HOME_PAGE_SCROLL_ITEM_WIDTH,
  HomePageScrollContainer,
  HomePageScrollItem,
  PADDING_X,
  PADDING_Y,
  Projects,
  ScrollButtons,
  SerialNumberContainer,
} from '~/components/HomeComponents'
import { HeadingWithSub } from '~/components/HeadingWithSub'
import { useScrollButtons } from '~/hooks/useScrollButtons'

const WelCome = () => (
  <Flex
    direction="column"
    w="full"
    h="412px"
    borderBottom="1px"
    borderStyle="solid"
    borderColor="secondary.900"
    pt={`${PADDING_Y}px`}
    pb="40px"
    px={`${PADDING_X}px`}
  >
    <HeadingWithSub sub="欢迎加入SEEDAO" mb="22px">
      WELCOME
    </HeadingWithSub>
    <Flex>
      <Text fontSize="16px" lineHeight="27px" fontWeight="400">
        元宇宙在呼唤创作者，一场前所未有的组织形态变革也在呼唤创作者。SeeDAO正是因此而设。我们的愿景是帮助一切想要从Web2.0世界来到Web3.0的创作者，成为你们可信的桥梁和助手。或许你们正在为不会调用Web3.0的工具而困惑，为不知如何启动社区而苦恼，为不知如何同其他社区协同而焦虑。SeeDAO正是为你们而设。
      </Text>
      <Image src="/assets/svg/welcome-icon.svg" w="64px" h="64px" ml="56px" />
    </Flex>
    <Link
      display="inline-flex"
      alignItems="center"
      mt="auto"
      textTransform="uppercase"
      textDecoration="underline"
      lineHeight="20px"
      fontWeight="semibold"
    >
      Learn more
      <Image src="/assets/svg/home-arrow.svg" w="24px" h="24px" ml="20px" />
    </Link>
  </Flex>
)

const Events = () => {
  const {
    ref: scrollContainerRef,
    isLeftmost,
    isRightmost,
    onScrollToRightByStep,
    onScrollToLeftByStep,
  } = useScrollButtons({ step: HOME_PAGE_SCROLL_ITEM_WIDTH * 3 })
  return (
    <Flex w="full" direction="column">
      <Flex
        py={`${PADDING_Y}px`}
        px={`${PADDING_X}px`}
        borderBottom="1px"
        borderStyle="solid"
        borderColor="secondary.900"
        align="center"
      >
        <HeadingWithSub sub="活动" mr="8px">
          EVENTS
        </HeadingWithSub>
        <ScrollButtons
          leftButtonProps={{
            disabled: isLeftmost,
            onClick: onScrollToLeftByStep,
          }}
          rightButtonProps={{
            disabled: isRightmost,
            onClick: onScrollToRightByStep,
          }}
        />
      </Flex>
      <HomePageScrollContainer ref={scrollContainerRef}>
        {new Array(10)
          .fill(0)
          .map((_, i) => i)
          .map((i) => (
            <HomePageScrollItem
              key={i}
              date="05.26"
              time="20:00"
              title={`游戏化产品社区内调研准备会${i}`}
              description="本周四， 晚上八点， 聊需求调研。 都先看历史信息， 并留下你宝贵的想法。"
            />
          ))}
      </HomePageScrollContainer>
    </Flex>
  )
}

const News = () => {
  const {
    ref: scrollContainerRef,
    isLeftmost,
    isRightmost,
    onScrollToRightByStep,
    onScrollToLeftByStep,
  } = useScrollButtons({ step: HOME_PAGE_SCROLL_ITEM_WIDTH * 3 })
  return (
    <Flex w="full" direction="column">
      <Flex
        py={`${PADDING_Y}px`}
        px={`${PADDING_X}px`}
        borderBottom="1px"
        borderStyle="solid"
        borderColor="secondary.900"
        align="center"
      >
        <HeadingWithSub sub="资讯" mr="8px">
          NEWS
        </HeadingWithSub>
        <ScrollButtons
          leftButtonProps={{
            disabled: isLeftmost,
            onClick: onScrollToLeftByStep,
          }}
          rightButtonProps={{
            disabled: isRightmost,
            onClick: onScrollToRightByStep,
          }}
        />
      </Flex>
      <HomePageScrollContainer ref={scrollContainerRef}>
        {new Array(10)
          .fill(0)
          .map((_, i) => i)
          .map((i) => (
            <HomePageScrollItem
              key={i}
              date="05.26"
              time="20:00"
              title={`游戏化产品社区内调研准备会${i}`}
              description="本周四， 晚上八点， 聊需求调研。 都先看历史信息， 并留下你宝贵的想法。"
            />
          ))}
      </HomePageScrollContainer>
    </Flex>
  )
}

const Guilds = () => (
  <Flex w="full" direction="column">
    <Box
      py={`${PADDING_Y}px`}
      px={`${PADDING_X}px`}
      borderBottom="1px"
      borderStyle="solid"
      borderColor="secondary.900"
    >
      <HeadingWithSub sub="公会">GUILDS</HeadingWithSub>
    </Box>
    <Grid
      templateColumns="repeat(4, 25%)"
      borderBottom="1px"
      borderStyle="solid"
      borderColor="secondary.900"
    >
      {new Array(9)
        .fill(0)
        .map((_, i) => i)
        .map((i) => (
          <AspectRatio
            key={i}
            ratio={1}
            margin="0 -1px -1px 0"
            borderBottom="1px"
            borderRight="1px"
            borderStyle="solid"
            borderColor="secondary.900"
          >
            <Box />
          </AspectRatio>
        ))}
    </Grid>
  </Flex>
)

const Footer: React.FC = () => (
  <Box
    py={`${PADDING_Y}px`}
    px={`${PADDING_X}px`}
    fontSize="24px"
    textTransform="uppercase"
    fontWeight="semibold"
  >
    © 2022 seedao
  </Box>
)

export default function HomeIndex() {
  return (
    <Flex w="full" direction="column">
      <SerialNumberContainer value={1}>
        <WelCome />
      </SerialNumberContainer>
      <SerialNumberContainer value={2}>
        <Events />
      </SerialNumberContainer>
      <SerialNumberContainer value={3}>
        <Guilds />
      </SerialNumberContainer>
      <SerialNumberContainer value={4}>
        <Projects />
      </SerialNumberContainer>
      <SerialNumberContainer value={5}>
        <News />
      </SerialNumberContainer>
      <Footer />
    </Flex>
  )
}
