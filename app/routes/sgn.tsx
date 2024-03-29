import { StripeBackground, STRIPE_WIDTH } from '~/components/StripeBackground'
import { ScrollContainer } from '~/components/ScrollContainer'
import type { StackProps } from '@chakra-ui/react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  keyframes,
  Link,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import { IconG, IconN, IconS } from '~/components/SgnComponents/SgnTitleIcon'
import { ButtonWithShadow } from '~/components/ButtonWithShadow'
import { HeadingWithSub } from '~/components/HeadingWithSub'
import type { ReactNode } from 'react'
import useSWR from 'swr'
import { useAPI } from '~/hooks/useAPI'
import { QueryKey } from '~/api/QueryKey'
import { useEnv } from '~/hooks/useEnv'

const animationKeyframes = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

const DataSetStack: React.FC<
  StackProps & {
    items?: ReactNode
    owners?: ReactNode
    price?: ReactNode
    totalVolume?: ReactNode
  }
> = ({ items, owners, price, totalVolume, ...props }) => {
  return (
    <HStack spacing="80px" whiteSpace="nowrap" px="25px" {...props}>
      <HStack spacing="16px">
        <Box>ITEMS</Box>
        <Box>{items || '-'}</Box>
      </HStack>
      <HStack spacing="16px">
        <Box>OWNERS</Box>
        <Box>{owners || '-'}</Box>
      </HStack>
      <HStack spacing="16px">
        <Box>FLOOR PRICE</Box>
        <Flex align="center">
          <Image src="/assets/svg/ether.svg" w="16px" h="26px" mr="4px" />
          {price || '-'}
        </Flex>
      </HStack>
      <HStack spacing="16px">
        <Box>TOTAL VOLUME</Box>
        <Box>{totalVolume || '-'}</Box>
      </HStack>
    </HStack>
  )
}

export default function Sgn() {
  const api = useAPI()
  const { data } = useSWR([QueryKey.GetSgnStatisticalData], () =>
    api.getSgnStatisticalData()
  )
  const env = useEnv()

  return (
    <ScrollContainer>
      <Box position="relative" h="2200px">
        <StripeBackground h="full" zIndex={1} />
        <Box position="relative" zIndex={2}>
          <Heading
            textTransform="uppercase"
            fontSize="140px"
            position="absolute"
            top="60px"
            left="173px"
            fontWeight="400"
          >
            Mint
            <HStack spacing="14px" display="inline-flex" ml="42px">
              <IconS w="98px" h="98px" color="adorn.100"></IconS>
              <IconG w="98px" h="98px" color="attention.100"></IconG>
              <IconN w="98px" h="98px" color="pass.100"></IconN>
            </HStack>
          </Heading>
          <Grid
            templateColumns="calc(100% / calc(7/3)) calc(100% / calc(7/3))"
            position="absolute"
            top="289px"
            left="183px"
            gridColumnGap="calc(100% / calc(7/1))"
            w={`calc(${STRIPE_WIDTH}px * 7)`}
          >
            <Box>
              <Heading
                as="h3"
                textTransform="uppercase"
                fontSize="44px"
                lineHeight="120%"
                fontWeight="semibold"
              >
                SGN Utility
              </Heading>
              <Text
                fontSize="20px"
                mt="20px"
                textAlign="justify"
                textTransform="uppercase"
              >
                SGN, 全称 SeeDAO Genesis NFT，象征着SeeDAO
                正式成员身份，也代表SeeDAO治理权和被选举权，是 SeeDAO
                生态最重要的 NFT。数目暂定为 10000 枚，只颁发给社区贡献者，坚持
                POW 原则。
              </Text>
              <HStack mt="96px" spacing="30px" textTransform="uppercase">
                <ButtonWithShadow
                  bg="pass.100"
                  color="primary.100"
                  textTransform="uppercase"
                >
                  Mint
                  <Image
                    src="/assets/svg/start-arrow.svg"
                    alt="arrow"
                    w="24px"
                    h="24px"
                    ml="20px"
                  />
                </ButtonWithShadow>
                <ButtonWithShadow
                  as="a"
                  bg="secondary.900"
                  color="primary.100"
                  textTransform="uppercase"
                  href={env.OPENSEA_URL}
                >
                  Opensea
                  <Image
                    src="/assets/svg/external_link.svg"
                    alt="arrow"
                    w="24px"
                    h="24px"
                    ml="20px"
                  />
                </ButtonWithShadow>
              </HStack>
            </Box>
            <Image
              src="/assets/png/union.png"
              alt="union"
              w="460px"
              pointerEvents="none"
            />
          </Grid>
          <VStack
            position="absolute"
            top="813px"
            left="183px"
            w={`${STRIPE_WIDTH * 3}px`}
            fontSize="20px"
            spacing="20px"
            textAlign="justify"
            textTransform="uppercase"
          >
            <HeadingWithSub sub="治理" w="full" color="adorn.100">
              govern
            </HeadingWithSub>
            <Text w="full">
              SGN 持有者是 SeeDAO 生态居民，拥有社区大会投票权和被选举权
            </Text>
            <Text w="full">深度参与各个公会核心事务的权利</Text>
          </VStack>
          <VStack
            position="absolute"
            top="1081px"
            left="490px"
            w={`${STRIPE_WIDTH * 3}px`}
            fontSize="20px"
            spacing="20px"
            textAlign="justify"
            textTransform="uppercase"
          >
            <HeadingWithSub sub="孵化" w="full" color="attention.100">
              Incubation
            </HeadingWithSub>
            <Text w="full">
              帮助每一位 SGN 持有者在SeeDAO实现梦想, 从 Holder 变成 Builder
            </Text>
            <Text w="full">
              只有SGN持有者提出的创DAO想法才会被SeeDAO孵化, 被社区基金支持
            </Text>
          </VStack>
          <VStack
            position="absolute"
            top="1381px"
            left="796px"
            w={`${STRIPE_WIDTH * 3}px`}
            fontSize="20px"
            spacing="20px"
            textAlign="justify"
            textTransform="uppercase"
          >
            <HeadingWithSub sub="空投" w="full" color="pass.100">
              Airdrop
            </HeadingWithSub>
            <Text w="full">未来SeeDAO发行治理代币， SGN是代币空投的依据</Text>
            <Text w="full">
              SeeDAO 日常记录贡献的 Memory of SeeDAO NFT (MSN) 也是空投依据
            </Text>
          </VStack>
          <Image
            src="/assets/png/sgn/avatars.png"
            alt="avatars"
            position="absolute"
            top="1102px"
            left="184px"
            w="230px"
            h="auto"
          />
          <Heading
            position="absolute"
            top="765px"
            textTransform="uppercase"
            fontSize="140px"
            lineHeight="140px"
            left="710px"
            fontWeight="300"
            textAlign="right"
          >
            SeeDAO
            <br />
            Genesis
            <br />
            NFT
            <br />
          </Heading>
          <Heading
            position="absolute"
            top="1444px"
            textTransform="uppercase"
            fontSize="140px"
            lineHeight="140px"
            left="179px"
            fontWeight="300"
            textAlign="left"
          >
            HOW <br />
            TO <br />
            GET <br />
          </Heading>
          <HStack position="absolute" left="490px" top="1745px" spacing="153px">
            <Box
              borderTop="1px"
              borderStyle="solid"
              borderColor="secondary.900"
              pt="20px"
              w="306px"
            >
              <HeadingWithSub sub="工作量挖矿" textTransform="none">
                PoW MINE
              </HeadingWithSub>
              <Text mt="20px" mb="45px">
                大胆参与SeeDAO各公会， 通过“工作量证明”挖掘SGN
              </Text>
              <Link
                fontSize="24px"
                fontWeight="500"
                display="inline-flex"
                alignItems="center"
                href={env.DISCORD_URL}
              >
                JOIN SEEDAO
                <Image
                  src="/assets/svg/home-arrow.svg"
                  alt="arrow"
                  w="24px"
                  h="24px"
                  ml="20px"
                />
              </Link>
            </Box>
            <Box
              borderTop="1px"
              borderStyle="solid"
              borderColor="secondary.900"
              pt="20px"
              w="306px"
            >
              <HeadingWithSub sub="购买">MarketPlace</HeadingWithSub>
              <Text mt="20px" mb="45px">
                限定发行量， <br />
                直接从二级市场购买
              </Text>
              <Link
                fontSize="24px"
                fontWeight="500"
                display="inline-flex"
                alignItems="center"
                href={env.OPENSEA_URL}
              >
                TO BUY
                <Image
                  src="/assets/svg/home-arrow.svg"
                  alt="arrow"
                  w="24px"
                  h="24px"
                  ml="20px"
                />
              </Link>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Flex
        position="absolute"
        h="60px"
        w="full"
        borderTop="1px solid"
        borderColor="secondary.900"
        bg="primary.900"
        bottom="0"
        left="0"
        lineHeight="60px"
        fontSize="36px"
        fontWeight="400"
        zIndex={3}
      >
        <Flex
          h="inherit"
          align="center"
          px="30px"
          borderRight="1px solid"
          borderColor="secondary.900"
        >
          <Image
            src="/assets/svg/social/opensea.svg"
            w="36px"
            h="36px"
            mr="10px"
          />
          <Box>OPENSEA DATA</Box>
        </Flex>
        <Flex flex={1} overflow="hidden" position="relative">
          {!data ? (
            <Flex px="25px" textTransform="uppercase" align="center">
              <Spinner w="36px" h="36px" mr="10px" my="auto" />
              Loading...
            </Flex>
          ) : (
            <Flex
              flex={1}
              overflow="hidden"
              position="absolute"
              animation={`${animationKeyframes} 10s linear infinite`}
            >
              {new Array(2).fill(0).map((_, i) => (
                <DataSetStack
                  key={i}
                  items={data?.totals}
                  owners={data?.holder}
                  price={data?.floor_price}
                  totalVolume={data?.trade_volume}
                />
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </ScrollContainer>
  )
}
