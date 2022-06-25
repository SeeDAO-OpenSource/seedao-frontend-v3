import { useLocation } from '@remix-run/react'
import { motion } from 'framer-motion'
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
import { useRef, useMemo, useState, useEffect } from 'react'
import BackgroundVideoPoster from '~/assets/png/seedao_index_poster.png'
import BackgroundVideo from '~/assets/video/seedao_index.mp4'
import { NAVIGATION_BAR_HEIGHT } from '~/components/NavigationBar'
import { Link as RemixLink } from '@remix-run/react'
import { HomeHeading, Indicator } from '~/components/HomeComponents'
import { CollapseBar } from '~/components/CollapseBar'
import { RoutePath } from '~/constants/RoutePath'
import HomeIndex from './home/index'
import Roadmap from './home/roadmap'
import About from './home/about'
import { Fade } from '~/components/Fade'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const location = useLocation()
  const pageOffsetX = useMemo(() => {
    if (location.pathname === RoutePath.HomeRoadmap) {
      return 'calc(calc(-100% / 3) - 1px)'
    }
    if (location.pathname === RoutePath.HomeAbout) {
      return 'calc(calc(-100% / 3) * 2)'
    }
    return '0'
  }, [location.pathname])
  const isHome = location.pathname === RoutePath.Home
  const isHomeRoadMap = location.pathname === RoutePath.HomeRoadmap
  const isHomeAbout = location.pathname === RoutePath.HomeAbout
  const isShowIndexSideBarByPathname = isHomeRoadMap || isHomeAbout
  const [isShowIndexSideBar, setIsShowIndexSideBar] = useState(
    isShowIndexSideBarByPathname
  )
  const [isShowRoadmapSideBar, setIsShowRoadmapSideBar] = useState(isHomeAbout)

  const transition = 400
  useEffect(() => {
    if (isHomeAbout) {
      const timer = setTimeout(() => setIsShowRoadmapSideBar(true), transition)
      return () => clearTimeout(timer)
    } else {
      setIsShowRoadmapSideBar(false)
    }
  }, [isHomeAbout])

  useEffect(() => {
    if (isShowIndexSideBarByPathname) {
      const timer = setTimeout(() => setIsShowIndexSideBar(true), transition)
      return () => clearTimeout(timer)
    } else {
      setIsShowIndexSideBar(false)
    }
  }, [isShowIndexSideBarByPathname])

  return (
    <Grid
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      w="full"
      h="full"
      gridTemplateColumns="calc(50% - 1px) 50%"
      flex={1}
      position="relative"
    >
      <Flex
        position="sticky"
        top={`${NAVIGATION_BAR_HEIGHT}px`}
        direction="column"
        maxH={`calc(100vh - ${NAVIGATION_BAR_HEIGHT}px)`}
        mb="-1px"
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
              <Indicator value={8200} keyName="Member" valueUnit="+" />
              <Indicator value={44000} keyName="Token" valueUnit="+" />
              <Indicator value={5} keyName="NFT Mint" valueUnit="%" />
              <Indicator value={8} keyName="Project" valueUnit="+" />
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
              <Link>
                <Image src="/assets/svg/social/twitter.svg" w="24px" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/svg/social/discord.svg" w="24px" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/svg/social/notion.svg" w="24px" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/svg/social/opensea.svg" w="24px" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/svg/social/wechat.svg" w="24px" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/svg/social/mirror.svg" w="24px" h="24px" />
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Grid
        templateColumns="60px 60px"
        position="absolute"
        top="1px"
        left="50%"
        zIndex={2}
        h="full"
        w="0"
        style={{
          opacity: isShowIndexSideBar && !isHome ? 1 : 0,
          pointerEvents: isShowIndexSideBar && !isHome ? 'unset' : 'none',
        }}
      >
        <CollapseBar
          position="sticky"
          top={`${NAVIGATION_BAR_HEIGHT}px`}
          to={RoutePath.Home}
          transition="0ms"
          style={{
            opacity: isShowIndexSideBar && !isHome ? 1 : 0,
            pointerEvents: isShowIndexSideBar && !isHome ? 'unset' : 'none',
          }}
        >
          <HomeHeading sub="主页">Index</HomeHeading>
        </CollapseBar>
        <CollapseBar
          position="sticky"
          top={`${NAVIGATION_BAR_HEIGHT}px`}
          left="60px"
          to={RoutePath.HomeRoadmap}
          transition="0ms"
          style={{
            opacity: isShowRoadmapSideBar && !isHome ? 1 : 0,
            pointerEvents: isShowRoadmapSideBar && !isHome ? 'unset' : 'none',
          }}
        >
          <HomeHeading sub="路线图">Roadmap</HomeHeading>
        </CollapseBar>
      </Grid>
      <Box
        borderLeft="1px"
        borderStyle="solid"
        borderColor="secondary.900"
        position="relative"
        overflowX="hidden"
        overflowY="auto"
      >
        <Grid
          h="full"
          templateRows="100%"
          templateColumns="repeat(3, calc(100% / 3))"
          w="300%"
          transform={`translateX(${pageOffsetX})`}
          transition={`${transition}ms`}
          position="relative"
        >
          <Fade isOpen={isHome}>
            <HomeIndex />
          </Fade>
          <Grid
            h="full"
            templateRows="100%"
            templateColumns="60px calc(100% - 60px)"
            position="relative"
          >
            <CollapseBar
              to={RoutePath.Home}
              position="relative"
              top="1px"
              style={{ opacity: isHomeRoadMap ? 1 : 0 }}
            >
              <HomeHeading sub="主页">Index</HomeHeading>
            </CollapseBar>
            <Fade isOpen={isHomeRoadMap}>
              <Roadmap />
            </Fade>
          </Grid>
          <Grid
            h="full"
            templateRows="100%"
            templateColumns="60px 60px calc(100% - 60px - 60px)"
            position="relative"
          >
            <CollapseBar
              to={RoutePath.Home}
              position="relative"
              top="1px"
              transition="0ms"
              style={{ opacity: isShowIndexSideBar ? 0 : 1 }}
            >
              <HomeHeading sub="主页">Index</HomeHeading>
            </CollapseBar>
            <CollapseBar
              to={RoutePath.HomeRoadmap}
              position="relative"
              top="1px"
            >
              <HomeHeading sub="路线图">Roadmap</HomeHeading>
            </CollapseBar>
            <Fade isOpen={isHomeAbout}>
              <About />
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}
