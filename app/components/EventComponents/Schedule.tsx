import type { ReactNode } from 'react'
import React, { useMemo } from 'react'
import {
  Box,
  Flex,
  VStack,
  Image,
  Heading,
  Text,
  HStack,
  Link,
} from '@chakra-ui/react'
import { ScrollContainer } from '~/components/ScrollContainer'
import dayjs from 'dayjs'
import { MONTH_ABBREVIATES } from '~/components/EventComponents/MonthTag'
import { AnimatePresence, motion } from 'framer-motion'

export interface ScheduleProps {
  day: dayjs.Dayjs
  items?: SchedulePanelProps[]
}

export interface SchedulePanelProps {
  time: ReactNode
  heading: ReactNode
  content: ReactNode
  moreHref?: string
}

export const WEEK_SET = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

export const Schedule: React.FC<ScheduleProps> = ({ day, items = [] }) => {
  const today = useMemo(() => dayjs(), [])
  const isToady = useMemo(() => today.isSame(day, 'date'), [day, today])
  const isAfter = useMemo(() => today.isAfter(day, 'date'), [day, today])
  const isBefore = useMemo(() => today.isBefore(day, 'date'), [day, today])

  const backgroundImages = [
    {
      src: '/assets/png/event_backgrounds/after.png',
      show: isAfter,
    },
    {
      src: '/assets/png/event_backgrounds/before.png',
      show: isBefore,
    },
    {
      src: '/assets/png/event_backgrounds/today.png',
      show: isToady,
    },
  ]

  return (
    <ScrollContainer position="relative" pb="30px">
      <Flex
        direction="column"
        position="relative"
        zIndex={0}
        pt="32px"
        px="30px"
      >
        <AnimatePresence>
          {backgroundImages.map((image) =>
            image.show ? (
              <Box
                as={motion.div}
                key={image.src}
                w="full"
                h="full"
                position="absolute"
                top="0"
                left="0"
                zIndex={-1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Image
                  src={image.src}
                  position="sticky"
                  top="0"
                  w="full"
                  h="auto"
                  pointerEvents="none"
                />
              </Box>
            ) : null
          )}
        </AnimatePresence>
        <Box
          fontSize="110px"
          lineHeight="110px"
          textTransform="uppercase"
          mb="13px"
        >
          {isToady
            ? 'TODAY'
            : `${MONTH_ABBREVIATES[day.month()]} ${day.date()}`}
        </Box>
        <Box fontSize="24px" lineHeight="24px" textTransform="uppercase">
          {day.format('YYYY.MM.DD')} {WEEK_SET[day.day()]}
        </Box>
        <VStack spacing="40px" mt="40px">
          {items.map((item, i) => (
            <SchedulePanel {...item} key={i} />
          ))}
        </VStack>
      </Flex>
    </ScrollContainer>
  )
}

export const SchedulePanel: React.FC<SchedulePanelProps> = ({
  time,
  heading,
  content,
  moreHref,
}) => {
  return (
    <Flex direction="column" w="full">
      <Box
        bg="secondary.900"
        color="primary.100"
        textAlign="center"
        w="136px"
        lineHeight="27px"
        h="27px"
      >
        {time}
      </Box>
      <Box
        w="full"
        border="1px"
        borderStyle="solid"
        borderColor="secondary.900"
        bg="primary.100"
        p="16px"
        position="relative"
      >
        <Heading fontSize="20px" lineHeight="20px" mb="12px">
          {heading}
        </Heading>
        <Text fontSize="14px" color="secondary.600" mb="29px">
          {content}
        </Text>
        <HStack spacing="40px" textTransform="uppercase">
          <Link
            textDecoration="underline"
            display="inline-flex"
            alignItems="center"
            href={moreHref}
          >
            More
            <Image
              src="/assets/svg/home-arrow.svg"
              w="16px"
              h="16px"
              ml="16px"
            />
          </Link>
          <Link
            textDecoration="underline"
            display="inline-flex"
            alignItems="center"
          >
            ADD Calendar
            <Image
              src="/assets/svg/home-arrow.svg"
              w="16px"
              h="16px"
              ml="16px"
            />
          </Link>
        </HStack>
      </Box>
    </Flex>
  )
}
