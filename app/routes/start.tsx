import {
  Box,
  Image,
  Heading,
  Text,
  Grid,
  Link,
  HStack,
  Flex
} from "@chakra-ui/react"
import {
  Window,
  WindowHeader,
  WindowFooterLink
} from "~/components/StartPageComponents"
import { ScrollContainer } from "~/components/ScrollContainer"
import { StripeBackground } from "~/components/StripeBackground"
import { useEnv } from "~/hooks/useEnv"

export default function Start() {
  const noShowModel = true
  const env = useEnv()

  return (
    <ScrollContainer>
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
        <Image
          src="/assets/png/start_model_poster.png"
          w="771px"
          h="693px"
          position="absolute"
          top="100px"
          left="517px"
          zIndex={-2}
        />
        {!noShowModel ? (
          <Box
            as="iframe"
            w="771px"
            h="693px"
            position="absolute"
            top="100px"
            left="517px"
            src="/3d.html"
            zIndex={-2}
          />
        ) : null}
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
          <Image src="/assets/svg/start/how_to_join.svg" w="516px" h="130px" />
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
            <br />
            进入 DeSchool
            <br />
            观看 onboarding 视频、领取 SBT
            <br />
            你就正式成为 SeeDAO 新成员啦！
            <br />
            点击加入 Discord，提案、协作、共创
            <br />
            就在这里发生！
            <br />
          </Text>
          <Link
            display="flex"
            alignItems="center"
            textDecoration="underline"
            mt="30px"
            textTransform="uppercase"
            href={
              "https://deschool.app/courses/course/62f0adc68b90ee1aa913a965/62f0adc68b90ee1aa913a966/learning/Video/63a46ae99ce6e09dd4811471"
            }
            target="_blank"
          >
            打开 DeSchool
            <Image
              src="/assets/svg/home-arrow.svg"
              w="16px"
              h="16px"
              ml="16px"
            />
          </Link>
          <Link
            display="flex"
            alignItems="center"
            textDecoration="underline"
            mt="30px"
            textTransform="uppercase"
            href={
              env.DISCORD_URL
            }
            target="_blank"
          >
            进入 Discord
          </Link>
        </Box>
        <Window
          header={
            <WindowHeader
              icon={
                <Image
                  src="/assets/svg/social/deschool.png"
                  w="24px"
                  h="24px"
                />
              }
              text="DeSchool"
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
            <Image src="/assets/png/noTitle-removebg-preview.png" />
            <Box>
              <Text fontSize="20px" lineHeight="20px" mb="10px">
                新手入门系列课程
              </Text>
              <Heading as="h5" fontSize="32px" lineHeight="32px">
                SeeDAO 登船指南
              </Heading>
              <HStack mt="18px" spacing="20px" fontSize="16px">
                <Flex align="center">
                  <Box bg="pass.100" w="6px" h="6px" mr="7px" rounded="10px" />
                  36 Likes
                </Flex>
                <Flex align="center">
                  <Box bg="pass.100" w="6px" h="6px" mr="7px" rounded="10px" />
                  4,258 Enrolled
                </Flex>
              </HStack>
            </Box>
          </Grid>
          <WindowFooterLink
            href={
              "https://deschool.app/courses/course/62f0adc68b90ee1aa913a965/62f0adc68b90ee1aa913a966/learning/Video/63a46ae99ce6e09dd4811471"
            }
          >
            打开 DeSchool
          </WindowFooterLink>
        </Window>
        <Window
          header={
            <WindowHeader
              icon={
                <Image src="/assets/svg/social/discord.svg" w="24px" h="24px" />
              }
              text="Discord"
            />
          }
          w="460px"
          left="182px"
          top="1990px"
          position="absolute"
          bg="primary.100"
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
                  <Box bg="pass.100" w="6px" h="6px" mr="7px" rounded="10px" />
                  1,597 Online
                </Flex>
                <Flex align="center">
                  <Box bg="pass.100" w="6px" h="6px" mr="7px" rounded="10px" />
                  10,482 Members
                </Flex>
              </HStack>
            </Box>
          </Grid>
          <WindowFooterLink href={env.DISCORD_URL}>
            打开 Discord 服务器
          </WindowFooterLink>
        </Window>
        <Box left="796px" top="1870px" position="absolute">
          <Heading as="h3" fontSize="60px" lineHeight="108px">
            Step2
          </Heading>
          <Text
            w="460px"
            fontSize="18px"
            lineHeight="36px"
            letterSpacing="0.04em"
            textAlign="justify"
            textTransform="uppercase"
          >
            <br />
            打开 SeeDAO 城邦广场
            <br />
            在这里，你可以找到一切你感兴趣的内容
            <br />
            🗂 城邦服务 - 公共政治中心，带你卷入协作、获取支持
            <br />
            🙌🏻 活跃公会 - 专业人才聚集地，共同成长探索
            <br />
            💑 城邦项目- SeeDAO 成员自主发起的建设性项目
            <br />
            🚘 孵化项目 - 为 DAO 所孵化的基础设施
            <br />
            📒 传送门 - 获取在各个平台的咨询、参与治理
            <br />
            <br />
          </Text>
        </Box>
      </Box>
      <StripeBackground />
    </ScrollContainer>
  )
}
