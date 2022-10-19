import { useLocation } from '@remix-run/react'
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  Image,
} from '@chakra-ui/react'
import { useRef } from 'react'
import BackgroundVideoPoster from '~/assets/png/seedao_index_poster.png'
import BackgroundVideo from '~/assets/video/seedao_index.mp4'
import { Link as RemixLink } from '@remix-run/react'
import { HeadingWithSub } from '~/components/HeadingWithSub'
import { CollapseBar } from '~/components/CollapseBar'
import { RoutePath } from '~/constants/RoutePath'
import HomeIndex from './home/index'
import Roadmap from './home/roadmap'
import About from './home/about'
import { Fade } from '~/components/Fade'
import { COLLAPSE_BAR_WIDTH, NAVIGATION_BAR_HEIGHT } from '~/constants'
import { ScrollContainer } from '~/components/ScrollContainer'
import { Indicator } from '~/components/Indicator'
import { useAPI } from '~/hooks/useAPI'
import useSWR from 'swr'
import { QueryKey } from '~/api/QueryKey'
import { useEnv } from '~/hooks/useEnv'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const location = useLocation()
  const isHome = location.pathname === RoutePath.Home
  const isHomeRoadMap = location.pathname === RoutePath.HomeRoadmap
  const isHomeAbout = location.pathname === RoutePath.HomeAbout
  const api = useAPI()
  const ENV = useEnv()

  const { data: homeStatisticalData } = useSWR(
    [QueryKey.GetHomeStatisticalData],
    async () => {
      return api.getHomeStatisticalData()
    }
  )

  return (
    <Grid
      w="full"
      h="full"
      gridTemplateColumns="50% calc(50% + 1px)"
      flex={1}
      position="relative"
    >
      <Flex
        position="sticky"
        top={`${NAVIGATION_BAR_HEIGHT}px`}
        direction="column"
        maxH={`calc(100vh - ${NAVIGATION_BAR_HEIGHT}px)`}
        mb="-1px"
        borderRight="1px"
        borderBottom="1px"
        borderStyle="solid"
        borderColor="secondary.900"
        overflow="hidden"
      >
        <Box
          as="video"
          autoPlay
          loop
          poster={BackgroundVideoPoster}
          src={BackgroundVideo}
          position="absolute"
          top="0"
          right="0"
          zIndex={-1}
          h="full"
          maxW="unset"
          muted
          ref={videoRef as any}
        />
        <Flex
          w="full"
          h="full"
          direction="column"
          position="relative"
          overflowX="hidden"
          overflowY="auto"
        >
          <Flex
            direction="column"
            position="relative"
            top="0"
            left="0"
            px="20px"
            align="flex-start"
          >
            <Heading
              as="h1"
              textTransform="uppercase"
              mt="25px"
              fontSize="140px"
              lineHeight="140px"
              fontWeight="400"
            >
              DAO it <br />
              do it
            </Heading>
            <Heading
              as="h2"
              fontWeight="400"
              fontSize="32px"
              textTransform="uppercase"
              mt="13px"
            >
              探索基于Web3.0的内容生产关系
            </Heading>
            <RemixLink to="/start">
              <Button
                variant="unstyled"
                h="44px"
                lineHeight="44px"
                mt="30px"
                display="inline-flex"
              >
                <Box
                  as="span"
                  display="inline-flex"
                  bg="secondary.900"
                  color="primary.100"
                  h="inherit"
                  px="16px"
                  fontSize="24px"
                  alignItems="center"
                  textTransform="uppercase"
                  transition="200ms"
                  _active={{
                    bg: 'secondary.700',
                  }}
                >
                  Start
                  <Image
                    src="/assets/svg/start-arrow.svg"
                    w="24px"
                    h="24px"
                    ml="20px"
                  />
                </Box>
                <Image
                  src="/assets/svg/start-decorate.svg"
                  w="auto"
                  h="inherit"
                  ml="2px"
                />
              </Button>
            </RemixLink>
          </Flex>
          <Flex direction="column" mt="auto" px="20px" py="30px">
            <Heading
              as="h3"
              textTransform="uppercase"
              fontSize="24px"
              fontWeight="400"
              mb="20px"
            >
              highlight
            </Heading>
            <HStack spacing="50px">
              <Indicator
                value={homeStatisticalData?.member}
                keyName="Member"
                valueUnit="+"
              />
              <Indicator
                value={homeStatisticalData?.token}
                keyName="Token"
                valueUnit="+"
              />
              <Indicator
                value={
                  homeStatisticalData?.nftmint
                    ? homeStatisticalData?.nftmint * 100
                    : undefined
                }
                keyName="NFT Mint"
                valueUnit="%"
              />
              <Indicator
                value={homeStatisticalData?.project}
                keyName="Project"
                valueUnit="+"
              />
            </HStack>
            <HStack
              mt="40px"
              spacing="40px"
              textTransform="uppercase"
              fontSize="24px"
              fontWeight="500"
            >
              <Link
                as={RemixLink}
                to="/home/roadmap"
                display="inline-flex"
                alignItems="center"
                bg={isHomeRoadMap ? 'secondary.900' : 'none'}
                color={isHomeRoadMap ? 'primary.100' : 'secondary.900'}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Roadmap
                <Image
                  src="/assets/svg/home-arrow.svg"
                  ml="20px"
                  w="24px"
                  h="24px"
                  filter={isHomeRoadMap ? 'invert(100%)' : 'none'}
                />
              </Link>
              <Link
                as={RemixLink}
                to="/home/about"
                display="inline-flex"
                alignItems="center"
                bg={isHomeAbout ? 'secondary.900' : 'none'}
                color={isHomeAbout ? 'primary.100' : 'secondary.900'}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                About
                <Image
                  src="/assets/svg/home-arrow.svg"
                  ml="20px"
                  w="24px"
                  h="24px"
                  filter={isHomeAbout ? 'invert(100%)' : 'none'}
                />
              </Link>
            </HStack>
            <HStack
              mt="40px"
              spacing="20px"
              textTransform="uppercase"
              fontWeight="400"
              fontSize="24px"
              lineHeight="24px"
            >
              <Box>Join us</Box>
              <Link href={ENV.TWITTER_URL} target="_blank">
                <Image src="/assets/svg/social/twitter.svg" w="24px" h="24px" />
              </Link>
              <Link href={ENV.DISCORD_URL} target="_blank">
                <Image src="/assets/svg/social/discord.svg" w="24px" h="24px" />
              </Link>
              <Link href={ENV.NOTION_URL} target="_blank">
                <Image src="/assets/svg/social/notion.svg" w="24px" h="24px" />
              </Link>
              <Link href={ENV.OPENSEA_URL} target="_blank">
                <Image src="/assets/svg/social/opensea.svg" w="24px" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/svg/social/wechat.svg" w="24px" h="24px" />
              </Link>
              <Link href={ENV.MIRROR_URL} target="_blank">
                <Image src="/assets/svg/social/mirror.svg" w="24px" h="24px" />
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Box position="relative" w="full" h="full" overflow="hidden">
        <ScrollContainer
          transition="300ms"
          style={{
            transform:
              isHomeRoadMap || isHomeAbout ? `translateX(-50%)` : undefined,
          }}
        >
          <Fade isOpen={isHome}>
            <HomeIndex />
          </Fade>
        </ScrollContainer>
        <Grid
          w="full"
          h="full"
          templateRows="100%"
          templateColumns="60px calc(100% - 60px)"
          position="absolute"
          left="100%"
          top="0"
          transition="300ms"
          style={{
            transform:
              isHomeRoadMap || isHomeAbout ? `translateX(-100%)` : undefined,
          }}
        >
          <CollapseBar to={RoutePath.Home} position="relative" top="1px">
            <HeadingWithSub sub="主页">Index</HeadingWithSub>
          </CollapseBar>
          <Fade isOpen={isHomeRoadMap}>
            <ScrollContainer>
              <Roadmap />
            </ScrollContainer>
          </Fade>
        </Grid>
        <Grid
          w={`calc(100% - ${COLLAPSE_BAR_WIDTH}px)`}
          h="full"
          templateRows="100%"
          templateColumns="60px calc(100% - 60px)"
          position="absolute"
          left="calc(100% + 1px)"
          top="0"
          transition="300ms"
          style={{
            transform: isHomeAbout ? `translateX(-100%)` : undefined,
          }}
        >
          <CollapseBar to={RoutePath.HomeRoadmap} position="relative" top="1px">
            <HeadingWithSub sub="路线图">Roadmap</HeadingWithSub>
          </CollapseBar>
          <Fade isOpen={isHomeAbout}>
            <ScrollContainer>
              <About />
            </ScrollContainer>
          </Fade>
        </Grid>
      </Box>
    </Grid>
  )
}
