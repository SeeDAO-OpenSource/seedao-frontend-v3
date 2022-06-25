import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react'
import { HomeHeading, PADDING_X, PADDING_Y } from '~/components/HomeComponents'

const text =
  `从CryptoC诞生的那一刻起，探索基于Web3.0的内容生产关系就是我们的使命。经过2021年的反复实践，我们终于决定发起成立一个真正的DAO，来实现这件事。这个DAO就是SeeDAO。

在2021年，CryptoC已经积累了大量的实践。我们搭建过NFT交易平台，也运营和治理过NFT项目；我们熟悉创作者在运作DAO的过程中可能调用的各种工具，也和各大公链以及元宇宙空间建立了相应的联系；我们知道NFT项目冷启动时的历程，也知道当DAO启动后运营所需注意的事项。此外，我们还做过线上与线下展览，组织过线上和线下会议，撰写和编译了诸多文章。这些经验，对于想从Web2.0进入Web3.0世界的创作者来说是宝贵的。现在，是时候把我们的经验开放出去，交给社区了。

这些将在SeeDAO中得以实现。——将Web2.0的创作者引入Web3.0世界，帮助内容创作者和内容消费者探索更好的生产关系和组织形态，这正是SeeDAO的使命。

我们可以在这一目标下发起各项活动。例如针对创作者进行科普和培训；例如帮助创作者匹配运营人员，发起相应活动；例如共同组建IP，以及共同搭建基于Web3.0的工具…

我们的工作可能会促成未来许多创作者DAO组织的诞生。我们相信，未来可能会有写作者的DAO、插图师的DAO、游戏制作者的DAO；也可能有围绕着某个IP而延展出来的DAO。SeeDAO既可能是这些DAO的连接器，也可能是他们出发的原点。

我们想要提供这些服务：
教育
发现和连接DAO
人力资源匹配（发布和提供DAO的工作岗位）
DAO的黑客松
元宇宙创作者的黑客松
……

SeeDAO向一切认同Web3.0，希望改写web2.0创作者经济模式的人们敞开。

如果你是想要进入Web3.0世界的内容创作者（小说、漫画、音乐、视频、游戏制作等），欢迎加入SeeDAO！

如果你是想要进入Web3.0世界的开发者，能够为内容创作者提供帮助，欢迎加入SeeDAO！

如果你是Web3.0世界的资源提供者（例如你手里持有大量元宇宙空间地块，可提供给创作者使用），欢迎加入SeeDAO！

如果你想投资Web3.0的创作者经济，投资各类创作者DAO，欢迎加入SeeDAO！

此外，我们欢迎一切能够帮助创作者DAO扩展的运营人员，无论是市场营销、文字输出、翻译人员，还是沟通协调、活动组织、创意贡献人员，你们都是SeeDAO所需要的人才。

如何加入SeeDAO？ 我们的Discord对一切想要了解SeeDAO的人们敞开。

不过，如果你想更深层次地参加SeeDAO的治理，参与SeeDAO的利益分配，你需要持有SeeDAO发行的创世NFT。

我们一共制作了10000枚SeeDAO NFT。在社区启动阶段，我们会面向三类朋友空投500枚NFT。他们是：

持有CryptoC徽章的朋友（共200枚）
在2021年11月22日之前订阅过CryptoC的媒体账号、参加过Crypto组织活动的朋友（共150枚）
持有至少价值$200的Bankless、Rally、FWB、Forefront等关键DAO组织或创作者经济代币的朋友（共150枚）
余下9500枚，我们将在社区的活动组织中逐步发出。

加入到Web3.0创作者经济的星辰大海来吧！
Just See！
`.split('\n')

export default function About() {
  return (
    <Flex w="full" h="full" py={`${PADDING_Y}px`} px={`${PADDING_X}px`}>
      <Box>
        <HomeHeading sub="关于">About</HomeHeading>

        <Heading as="h3" fontSize="28px" mt="22px" mb="38px">
          SeeDAO—— <br />
          基于Web3.0的内容创作者组织系统
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
