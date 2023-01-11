import {
  Box,
  Flex,
  Link,
  Text,
  Grid,
  AspectRatio,
  Image,
  Center,
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
import { Link as RemixLink } from '@remix-run/react'
import { RoutePath } from '~/constants/RoutePath'
import { GuildItems } from '~/data/guilds'
import useSWR from 'swr'
import { QueryKey } from '~/api/QueryKey'
import { useAPI } from '~/hooks/useAPI'
import dayjs from 'dayjs'

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
      SeeDAO是一个致力于连接100万 Web3游民的数字城邦。我们的愿景是：在基于地缘的民族国家之外，在赛博世界另建一片人类的生存空间。在这片空间中，人类可以重新建立组织和连接，并逐渐将影响力辐射至现实世界。<br/>SeeDAO致力于促进社区成员在城邦中的连接、流动、交换与自由。任何一个想要在赛博世界建设这片土地的朋友，欢迎你来到SeeDAO！你我将共同写下虚拟时代的诗篇。
      </Text>
      <Image src="/assets/svg/welcome-icon.svg" w="64px" h="64px" ml="56px" />
    </Flex>
    <Link
      as={RemixLink}
      display="inline-flex"
      alignItems="center"
      mt="auto"
      textTransform="uppercase"
      textDecoration="underline"
      lineHeight="20px"
      fontWeight="semibold"
      to={RoutePath.HomeAbout}
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
  const api = useAPI()
  const { data: homeEvent } = useSWR([QueryKey.GetHomeEventItems], async () => {
    return api.getHomeEventItems()
  })

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
        {homeEvent?.events.map((event) => (
          <HomePageScrollItem
            key={event.time + event.subject + event.content}
            date={dayjs(event.time).format('MM.DD')}
            time={dayjs(event.time).format('HH:mm')}
            title={event.subject}
            description={event.content}
            href={event.link}
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
  const api = useAPI()
  const { data: homeNews } = useSWR([QueryKey.GetHomeNewItems], async () => {
    return api.getHomeNewsItems()
  })

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
        {homeNews?.news?.map((newItem) => (
          <HomePageScrollItem
            key={newItem.time + newItem.subject + newItem.content}
            date={dayjs(newItem.time).format('MM.DD')}
            time={dayjs(newItem.time).format('HH:mm')}
            title={newItem.subject}
            description={newItem.content}
            href={newItem.link}
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
      {GuildItems.map((guild, i) => (
        <AspectRatio
          key={i}
          ratio={1}
          margin="0 -1px -1px 0"
          borderBottom="1px"
          borderRight="1px"
          borderStyle="solid"
          borderColor="secondary.900"
        >
          <Flex
            direction="column"
            p="20px"
            as="a"
            target="_blank"
            href={guild.link.notion}
            position="relative"
            _hover={{ bg: 'secondary.100' }}
          >
            <Center top="30px" left="0" w="full" position="absolute">
              <Image
                src={guild.img}
                alt={guild.name}
                w="80px"
                h="80px"
                objectFit="cover"
              />
            </Center>
            <Flex mt="auto" w="full" align="center">
              <Text as="h5" fontSize="16px" whiteSpace="pre" lineHeight="16px">
                {guild.name}
              </Text>
              <Image src={guild.icon} w="16px" h="16px" alt="icon" ml="auto" />
            </Flex>
          </Flex>
        </AspectRatio>
      ))}
      <Flex direction="column" justify="flex-end" p="20px">
        <Box>MORE</Box>
      </Flex>
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
    © 2023 seedao
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
