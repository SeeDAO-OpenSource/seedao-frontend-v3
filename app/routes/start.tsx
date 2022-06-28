import {
  Box,
  Image,
  Heading,
  Text,
  Grid,
  Link,
  HStack,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  Background,
  Window,
  WindowHeader,
  WindowFooterLink,
} from '~/components/StartPageComponents'
import { ScrollContainer } from '~/components/ScrollContainer'
import { useEffect, useState } from 'react'
import { Fade } from '~/components/Fade'

const sidebar = {
  open: () => ({
    clipPath: `circle(${2000 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(1px at 40px 420px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default function Start() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 2000)
  }, [])

  return (
    <ScrollContainer>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sidebar}
      >
        <Box position="relative" h="2500px">
          <Heading
            as="h1"
            textTransform="uppercase"
            position="absolute"
            left="182px"
            top="65px"
            fontSize="100px"
          >
            WELCOME
          </Heading>
          <Image
            src="/assets/svg/start/if_you.svg"
            w="406px"
            h="187px"
            transform="translateX(-92px)"
            position="absolute"
            left="182px"
            top="215px"
          />
          <Text
            position="absolute"
            left="182px"
            top="370px"
            lineHeight="32.4px"
            fontSize="18px"
            letterSpacing="0.05em"
          >
            想进入Web3.0世界创作内容 <br />
            想进入Web3.0世界进行开发 <br />
            是Web3.0世界的资源提供者 <br />
            想投资Web3.0的创作者经济 <br />
            想参与创作者DAO的运营策划
          </Text>
          <Heading
            as="h4"
            fontSize="40px"
            lineHeight="72px"
            letter-spacing="0.04em"
            position="absolute"
            left="182px"
            top="580px"
            fontWeight="400"
          >
            欢迎加入SeeDAO！
          </Heading>
          {!isLoaded ? (
            <Image
              src="/assets/png/start_model_poster.png"
              w="771px"
              h="693px"
              position="absolute"
              top="100px"
              left="517px"
              zIndex={-2}
            />
          ) : null}
          <Fade
            isOpen={isLoaded}
            position="absolute"
            top="100px"
            left="517px"
            zIndex={-2}
            w="771px"
            h="693px"
          >
            <Image
              src="/assets/png/start_model_poster.png"
              w="inherit"
              h="inherit"
              objectFit="contain"
            />
          </Fade>
          <Box
            as="iframe"
            w="771px"
            h="693px"
            position="absolute"
            top="100px"
            left="517px"
            src="/3d.html"
            zIndex={-2}
            style={{ opacity: isLoaded ? 1 : 0 }}
          />
          <Box position="absolute" left="182px" top="787px" w="530px">
            <Heading as="h3" fontSize="60px" lineHeight="108px">
              You can do
            </Heading>
            <Text
              fontSize="18px"
              lineHeight="36px"
              letterSpacing="0.04em"
              textAlign="justify"
              whiteSpace="nowrap"
              textTransform="uppercase"
            >
              加入兴趣小组，找到志同道合的小伙伴！
              <br />
              加入SeeDAO公会，发起项目，完善社区生态，参与社区共建 ！<br />
              自由发布活动，有趣的灵魂终将相遇！
            </Text>
          </Box>
          <Box position="absolute" left="796px" top="895px" w="460px">
            <Heading as="h3" fontSize="60px" lineHeight="108px">
              You can get
            </Heading>
            <Text
              fontSize="18px"
              lineHeight="36px"
              letterSpacing="0.04em"
              textAlign="justify"
              textTransform="uppercase"
            >
              你可以获得SeeDAO专属工分poap，每次有意义的贡献都值得被铭记。
              <br />
              你可以成为我们的核心贡献者，获得治理NFT <br />
              你可以直接领取薪酬，有些工作是包含预算的
              <br />
              你可以在公会里和小伙伴一起接一些外包获取收入 <br />
              你可以积累如何真正开展一个DAO的经验 <br />
              你可以提出一个idea,
              找一群人，获取seedao的资金和资源支持，孵化一个subdao <br />
              最后，你可以认识一群有趣的人
            </Text>
          </Box>
          <Box position="absolute" left="182px" top="1246px">
            <Image
              src="/assets/svg/start/how_to_join.svg"
              w="516px"
              h="130px"
            />
            <Heading as="h3" fontSize="60px" lineHeight="108px">
              Step1
            </Heading>
            <Text
              w="460px"
              fontSize="18px"
              lineHeight="36px"
              letterSpacing="0.04em"
              textAlign="justify"
              textTransform="uppercase"
            >
              加入Seedao Discord，
              <br />
              你可以把这里想象成是一个虚拟世界里聚集创作者的大“工厂”，而各个不同的“类别”就是工厂的厂区，频道就是厂区内的厂房或者车间。
            </Text>
            <Link
              display="flex"
              alignItems="center"
              textDecoration="underline"
              mt="30px"
              textTransform="uppercase"
            >
              More
              <Image
                src="/assets/svg/home-arrow.svg"
                w="16px"
                h="16px"
                ml="16px"
              />
            </Link>
          </Box>
          <Window
            header={
              <WindowHeader
                icon={
                  <Image
                    src="/assets/svg/social/discord.svg"
                    w="24px"
                    h="24px"
                  />
                }
                text="Discord"
              />
            }
            left="796px"
            top="1494px"
            position="absolute"
            bg="primary.100"
            w="460px"
          >
            <Grid
              px="30px"
              pt="30px"
              pb="58px"
              templateColumns="100px calc(100% - 100px - 20px)"
              gap="20px"
            >
              <Image src="/assets/png/seedao_logo.png" />
              <Box>
                <Text fontSize="20px" lineHeight="20px" mb="10px">
                  You have been invited to join
                </Text>
                <Heading as="h5" fontSize="32px" lineHeight="32px">
                  SEEDAO
                </Heading>
                <HStack mt="18px" spacing="20px" fontSize="16px">
                  <Flex align="center">
                    <Box bg="online" w="6px" h="6px" mr="7px" rounded="10px" />
                    1,597 Online
                  </Flex>
                  <Flex align="center">
                    <Box bg="online" w="6px" h="6px" mr="7px" rounded="10px" />
                    85,81 Members
                  </Flex>
                </HStack>
              </Box>
            </Grid>
            <WindowFooterLink>accept invitation</WindowFooterLink>
          </Window>
          <Window
            header={
              <WindowHeader
                icon={
                  <Image
                    src="/assets/svg/social/notion.svg"
                    w="24px"
                    h="24px"
                  />
                }
                text="Seedao-wiki"
              />
            }
            w="306px"
            left="182px"
            top="1990px"
            position="absolute"
            bg="primary.100"
          >
            <Box pt="20px" px="16px" pb="38px">
              <Heading as="h5" fontSize="32px" mb="10px">
                🌝
              </Heading>
              <Heading
                as="h5"
                fontSize="32px"
                mb="10px"
                textTransform="uppercase"
              >
                SEEDAO-wiki
              </Heading>
              <Text fontSize="14px">
                SeeDAO向一切认同 Web3.0，希望改写Web2.0
                创作者经济模式的人们敞开。
              </Text>
            </Box>
            <WindowFooterLink>Open in notion</WindowFooterLink>
          </Window>
          <Box left="796px" top="1870px" position="absolute">
            <Heading as="h3" fontSize="60px" lineHeight="108px">
              Step1
            </Heading>
            <Text
              w="460px"
              fontSize="18px"
              lineHeight="36px"
              letterSpacing="0.04em"
              textAlign="justify"
              textTransform="uppercase"
            >
              打开Seedao WIKI，
              <br />
              在这里，你可以找到一切你感兴趣的内容
              <br />
              <br />
              🚘 新手指引 - 进入SeeDAO前，先看这里了解我们
              <br />
              📑 治理文档 - 最重要的治理规则，确保你认可后再加入
              <br />
              🙌🏻 公会 - 公会是人才聚集进行纵向治理的单元
              <br />
              💑 项目 - 项目是横向链接公会进行创造的地方
              <br />
              📒 知识库 - 教育是seedao的日常工作
              <br />
              🗂 素材库
              <br />
              📝 提案区
              <br />
            </Text>
          </Box>
        </Box>
        <Background />
      </motion.div>
    </ScrollContainer>
  )
}
