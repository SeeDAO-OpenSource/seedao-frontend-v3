import { Box, Flex, Grid, Image } from '@chakra-ui/react'
import { Link as RemixLink, useLocation } from '@remix-run/react'
import { Virtuoso } from 'react-virtuoso'
import dayjs from 'dayjs'
import type { ScheduleListItem } from '~/components/EventComponents'
import {
  MONTH_ABBREVIATES,
  MonthTag,
  TodayTag,
  ScheduleList,
  Search,
  Schedule,
} from '~/components/EventComponents'
import { HeadingWithSub } from '~/components/HeadingWithSub'
import { useMemo, useState } from 'react'
import {
  CONTAINER_HEIGHT,
  EVENT_TITLE_WIDTH,
  EVENT_SEARCH_BAR_HEIGHT,
  EVENT_FILTER_WIDTH,
} from '~/constants'
import { RoutePath } from '~/constants/RoutePath'
import { Filter } from '~/components/Filter'

const totalCount = 500
const baseLineIndex = Math.floor(totalCount / 2)

const exampleScheduleItem = {
  time: '20:00 – 21:00',
  heading: '#201 DeFi',
  content: `来了来了！DeFi板块来了！
          每天在加密世界听到各种Fi，什么GameFi，SocialFi，CommunityFi，DaoFi，还有CeFi。。这都是啥~啊~~
          这一切Fi都来自一种Fi，那就是酱酱~DeFi:tada: :tada:
          来！今天就告诉你到底什么是DeFi`,
  moreHref: RoutePath.Event,
}

export default function Event() {
  const scheduleListMap: { [key: string]: ScheduleListItem[] } = {
    '2022-6-28': [
      {
        time: '19:00',
        name: '产品公会周会',
      },
      {
        time: '20:00',
        name: '开发者公会会议',
      },
    ],
    '2022-7-28': [
      {
        time: '19:00',
        name: '产品公会周会',
      },
      {
        time: '20:00',
        name: '开发者公会会议',
      },
    ],
  }
  const location = useLocation()
  const querySearch = useMemo(
    // eslint-disable-next-line compat/compat
    () => new URLSearchParams(location.search),
    [location]
  )
  const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs>(
    dayjs(querySearch.get('date') || dayjs())
  )

  return (
    <Grid
      templateColumns={`calc(100% - ${EVENT_FILTER_WIDTH}px) ${EVENT_FILTER_WIDTH}px`}
      h="full"
    >
      <Grid
        templateRows={`${EVENT_SEARCH_BAR_HEIGHT}px calc(100% - ${EVENT_SEARCH_BAR_HEIGHT}px)`}
        borderRight="1px"
        borderStyle="solid"
        borderColor="secondary.900"
        h="full"
      >
        <Grid
          templateColumns={`${EVENT_TITLE_WIDTH}px calc(100% - ${EVENT_TITLE_WIDTH}px)`}
          borderBottom="1px"
          borderStyle="solid"
          borderColor="secondary.900"
        >
          <Flex
            align="center"
            bg="adorn.900"
            h={`${EVENT_SEARCH_BAR_HEIGHT - 1}px`}
            px="20px"
            borderRight="1px"
            borderStyle="solid"
            borderColor="secondary.900"
          >
            <Image src="/assets/png/event.png" w="40px" h="40px" />
            <HeadingWithSub
              color="primary.100"
              sub="活动"
              ml="8px"
              subProps={{ fontWeight: 'semibold' }}
            >
              EVENT
            </HeadingWithSub>
          </Flex>
          <Search />
        </Grid>
        <Box
          as={Virtuoso}
          w="full"
          h="full"
          totalCount={totalCount}
          initialTopMostItemIndex={baseLineIndex}
          fixedItemHeight={160}
          overscan={160 * 7}
          itemContent={(index: number) => (
            <Grid
              key={index}
              h="160px"
              templateColumns="repeat(7, calc(100% / 7))"
              borderBottom="1px"
              borderStyle="solid"
              borderColor="secondary.200"
            >
              {new Array(7).fill(0).map((_, i) => {
                const offset =
                  (index - baseLineIndex - 3) * 7 + i + (7 - dayjs().day())
                const d = dayjs().add(offset, 'day')
                const date = d.date()
                const m = date === 1 ? MONTH_ABBREVIATES[d.month()] : null
                const isSameSelectedDay = selectedDay.isSame(d, 'date')
                const opacity = offset < 0 ? 0.3 : 1
                return (
                  <Flex
                    to={{
                      pathname: RoutePath.Event,
                      search: `date=${d.format('YYYY-MM-DD')}`,
                    }}
                    replace
                    as={RemixLink}
                    key={i}
                    borderLeft="1px"
                    borderStyle="solid"
                    borderColor="secondary.200"
                    p="10px"
                    position="relative"
                    direction="column"
                    justify="space-between"
                    transition="200ms"
                    _hover={
                      !isSameSelectedDay
                        ? {
                            bg: 'secondary.100!important',
                          }
                        : {}
                    }
                    _last={{
                      borderRight: '0',
                    }}
                    style={{
                      backgroundColor: isSameSelectedDay
                        ? offset === 0
                          ? 'var(--chakra-colors-adorn-900)'
                          : 'var(--chakra-colors-secondary-900)'
                        : 'var(--chakra-colors-primary-100)',
                    }}
                    onClick={() => {
                      setSelectedDay(d)
                    }}
                  >
                    <Box
                      color={offset === 0 ? 'adorn.900' : 'secondary.900'}
                      fontSize={offset === 0 ? '24px' : '20px'}
                      textDecoration={offset === 0 ? 'underline' : 'none'}
                      mb="auto"
                      style={{
                        opacity: isSameSelectedDay ? 1 : opacity,
                        color: isSameSelectedDay
                          ? 'var(--chakra-colors-primary-100)'
                          : undefined,
                      }}
                    >
                      {d.date()}
                    </Box>
                    {m ? (
                      <MonthTag
                        bg={offset === 0 ? 'adorn.900' : 'secondary.900'}
                        style={{
                          opacity: isSameSelectedDay ? 1 : opacity,
                          color: isSameSelectedDay
                            ? offset === 0
                              ? 'var(--chakra-colors-adorn-900)'
                              : 'var(--chakra-colors-secondary-900)'
                            : undefined,
                          backgroundColor: isSameSelectedDay
                            ? 'var(--chakra-colors-primary-100)'
                            : undefined,
                        }}
                      >
                        {m}
                      </MonthTag>
                    ) : null}
                    {offset === 0 && !m ? <TodayTag /> : null}
                    <ScheduleList
                      items={scheduleListMap[d.format('YYYY-M-D')]}
                      style={{
                        opacity: isSameSelectedDay ? 1 : opacity,
                        color: isSameSelectedDay
                          ? 'var(--chakra-colors-primary-100)'
                          : undefined,
                      }}
                    />
                  </Flex>
                )
              })}
            </Grid>
          )}
        />
      </Grid>
      <Grid
        templateRows={`${EVENT_SEARCH_BAR_HEIGHT}px calc(100% - ${EVENT_SEARCH_BAR_HEIGHT}px)`}
        h="full"
        maxH={`${CONTAINER_HEIGHT - 1}px`}
      >
        <Box
          w="full"
          borderBottom="1px"
          borderStyle="solid"
          borderColor="secondary.900"
        >
          <Filter />
        </Box>
        <Box w="full">
          <Schedule
            day={selectedDay}
            items={[
              exampleScheduleItem,
              exampleScheduleItem,
              exampleScheduleItem,
            ]}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
