import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import {
  MEMBER_FILTER_WIDTH,
  MEMBER_HALL_WIDTH,
  MEMBER_ITEM_HEIGHT,
  MEMBER_SEARCH_HEIGHT,
} from '~/constants'
import { Indicator } from '~/components/Indicator'
import { Search } from '~/components/EventComponents'
import { Filter } from '~/components/Filter'
import { SGNS } from '~/data/sgn'
import { Virtuoso } from 'react-virtuoso'
import { AvatarsBackground, ITEM_SIZE } from '~/components/AvatarsBackground'
import { MemberTags } from '~/components/MemberTags'
import { useState } from 'react'
import { useDebounce } from '~/hooks/useDebounce'

const MEMBER_LIST_ID = 'member_list_id'

export default function Member() {
  const [activeIndex, setActiveIndex] = useState(0)
  const onChangeActiveIndex = useDebounce(setActiveIndex)

  return (
    <Grid
      w="full"
      h="full"
      templateColumns={`${MEMBER_HALL_WIDTH}px calc(100% - ${MEMBER_HALL_WIDTH}px)`}
    >
      <Box position="relative" overflow="hidden">
        <Box
          position="absolute"
          left="220px"
          top="0"
          w={`calc(${ITEM_SIZE}px * 11)`}
          h="150%"
          transform="rotate(15deg)"
        >
          <AvatarsBackground
            images={SGNS.map((item) => item.tokenUrl)}
            activeIndex={activeIndex}
          />
        </Box>
        <Flex
          direction="column"
          borderRight="1px"
          borderColor="secondary.900"
          borderStyle="solid"
          w="full"
          h="full"
          px="20px"
          pt="25px"
          pb="30px"
          position="relative"
          zIndex={1}
          bg="linear-gradient(-30deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"
        >
          <Heading fontSize="110px" w="420px" textTransform="uppercase">
            Hall of fame
          </Heading>
          <Heading as="h2" fontSize="32px" w="420px" textTransform="uppercase">
            SEEDAO风云榜
          </Heading>
          <Box mt="auto">
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
              <Indicator value={420} keyName="SGN HOLDER" valueUnit="+" />
              <Indicator value={8200} keyName="Member" valueUnit="+" />
              <Indicator value={5} keyName="NFT Mint" valueUnit="%" />
            </HStack>
          </Box>
        </Flex>
      </Box>
      <Grid
        templateRows={`${MEMBER_SEARCH_HEIGHT}px calc(100% - ${MEMBER_SEARCH_HEIGHT}px)`}
        mb="-1px"
      >
        <Grid
          templateColumns={`calc(100% - ${MEMBER_FILTER_WIDTH}px) ${MEMBER_FILTER_WIDTH}px`}
          borderBottom="1px"
          borderColor="secondary.900"
          borderStyle="solid"
        >
          <Search
            borderRight="1px"
            borderColor="secondary.900"
            borderStyle="solid"
          />
          <Filter />
        </Grid>
        <Box
          id={MEMBER_LIST_ID}
          as={Virtuoso}
          h="full"
          totalCount={Math.ceil(SGNS.length / 3)}
          mr="-1px"
          fixedItemHeight={MEMBER_ITEM_HEIGHT}
          itemContent={(index: number) => (
            <Grid templateColumns="repeat(3, calc(100% / 3))" key={index}>
              {new Array(3)
                .fill(0)
                .map((_, i) => SGNS[index * 3 + i])
                .filter((item) => item)
                .map((item, i) => (
                  <Grid
                    key={i}
                    h={`${MEMBER_ITEM_HEIGHT}px`}
                    borderRight="1px"
                    borderBottom="1px"
                    borderColor="secondary.900"
                    borderStyle="solid"
                    p="30px"
                    pr="25px"
                    templateColumns="100%"
                    templateRows="72px calc(100% - 72px)"
                    onMouseEnter={() => onChangeActiveIndex(index * 3 + i)}
                    onMouseMove={() => setActiveIndex(index * 3 + i)}
                  >
                    <Grid
                      templateColumns="72px calc(100% - 72px - 20px)"
                      gap="20px"
                    >
                      <Image src={item.tokenUrl} alt="avatar" h="72px" />
                      <Flex direction="column">
                        {item.discordName ? (
                          <Heading
                            as="h4"
                            fontSize="20px"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                            overflow="hidden"
                            title={item.discordName}
                            mb="5px"
                          >
                            {item.discordName}
                          </Heading>
                        ) : null}
                        <Heading as="h5" color="adorn.100" fontSize="12px">
                          SGN #{item.tokenId}
                        </Heading>
                        <HStack spacing="10px" mt="auto">
                          {item.contact?.twitter ? (
                            <Link href={item.contact.twitter} target="_blank">
                              <Image
                                src="/assets/svg/social/twitter.svg"
                                alt="twitter"
                                w="16px"
                                h="16px"
                              />
                            </Link>
                          ) : null}
                        </HStack>
                      </Flex>
                    </Grid>
                    <Flex pt="20px" direction="column">
                      {item.guilds && item.guilds.length > 0 ? (
                        <MemberTags tags={item.guilds} />
                      ) : null}
                      {item.projects && item.projects.length > 0 ? (
                        <MemberTags tags={item.projects} />
                      ) : null}
                      <Box
                        overflowX="hidden"
                        overflowY="scroll"
                        h="full"
                        pr="10px"
                        mt="16px"
                        css={{
                          '&::-webkit-scrollbar': {
                            width: '1px',
                            height: '1px',
                          },
                          '&::-webkit-scrollbar-track': {
                            width: '1px',
                            height: '1px',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor:
                              'var(--chakra-colors-secondary-200)',
                          },
                        }}
                      >
                        {item.description ? (
                          <Text
                            color="secondary.800"
                            fontSize="12px"
                            lineHeight="180%"
                            textAlign="justify"
                            whiteSpace="pre-line"
                          >
                            {item.description}
                          </Text>
                        ) : null}
                      </Box>
                    </Flex>
                  </Grid>
                ))}
            </Grid>
          )}
        />
      </Grid>
    </Grid>
  )
}
