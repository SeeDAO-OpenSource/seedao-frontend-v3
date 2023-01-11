import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react'
import { HeadingWithSub } from '~/components/HeadingWithSub'
import { PADDING_X, PADDING_Y } from '~/components/HomeComponents'

const text =
  `我们这代人面临着两个难题：高失业率和越来越强的外界控制。这不仅仅是某一个国家的人面临的问题，而是一个全球性的问题。

  我们生活在一个秩序崩塌的时代，各国经济情况恶化，局部战争不断。接受过高等教育的青年人找不到工作，而需要被服务的人又因为贫穷得不到帮助。精神焦虑吞噬着年轻人，但科技巨头和国家机器对个人的控制却越来越严。大家的生活似乎只剩下了内卷、摸鱼和躺平。\n
  
  许多人都在找一个答案。而我们认为DAO是一个值得探索的答案。\n
  
  这是我们相聚在SeeDAO的原因。\n
  
  SeeDAO的使命是成为一个能够连接100万华人的数字城邦。我们致力于促进社区成员的连接、流动、交换和自由。致力于帮助大家建立海内外信息流通的桥梁，帮助个人在Web3时代探索新的教育、协作和工作方式，帮助大家在原子化的社会构建新的人际网络。\n
  
  在SeeDAO的各位成员，基于POW的原则进行协作，共同建设，共享劳动成果。\n
  
  我们希望，SeeDAO不仅是一个组织，它也能成为一种生活方式。\n
  
  目前，SeeDAO的社区成员超过了1万名。SeeDAO的贡献者超过了800名。SeeDAO的核心贡献者超过了60名。\n
  
  在过去一年时间里，SeeDAO 已经成为了Web3华语世界的重要入口。我们共同协作翻译了四五百篇文章，翻译公会已经是华语世界最大的Web3翻译组织\n
  
  我们共同协作生产了100多节课程，SeeDAO孵化的Web3大学是华语世界影响力最大的Web3教育组织之一\n
  
  我们还发起了100多次线上及线下活动，在上海、北京、深圳、大理、墨尔本等城市开展了线下活动，在大理拥有了第一个SeeDAO线下据点。\n
  
  欢迎加入SeeDAO！无论你是对Web3一无所知的新人，还是已经深耕多年的老兵；\n
  
  无论你是高校的学生，还是已经颇有工作经验的社会人士；\n
  
  无论你是在中国、美国、欧洲，或是世界上任何一个角落；\n
  
  无论你现在年纪十六还是六十；\n
  
  更无论你的性别、肤色、人种和宗教信仰……\n
  
  欢迎你走进这个新世界，一起来探索这种新型协作方式。\n
  
  SeeDAO的未来由我们共同创造。\n
`.split('\n')

export default function About() {
  return (
    <Flex w="full" h="full" py={`${PADDING_Y}px`} px={`${PADDING_X}px`}>
      <Box>
        <HeadingWithSub sub="关于">About</HeadingWithSub>

        <Heading as="h3" fontSize="28px" mt="22px" mb="38px">
          SeeDAO—— <br />
          连接百万 Web3 游民的数字城邦
        </Heading>

        <Text>
          {text.map((t, i) => (
            <Text key={i}>{t ? t : <br />}</Text>
          ))}
        </Text>
      </Box>
      <Image src="/assets/svg/about-icon.svg" w="64px" h="64px" ml="46px" />
    </Flex>
  )
}
