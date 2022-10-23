import React from 'react'
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { PADDING_X, PADDING_Y } from './index'

export const HOME_PAGE_SCROLL_ITEM_WIDTH = 220

export interface HomePageScrollItemProps {
  date: string
  time: string
  title: string
  description: string
  href?: string
}

export const HomePageScrollItem: React.FC<HomePageScrollItemProps> = ({
  date,
  time,
  title,
  description,
  href,
}) => (
  <Flex
    direction="column"
    w={`${HOME_PAGE_SCROLL_ITEM_WIDTH}px`}
    minW={`${HOME_PAGE_SCROLL_ITEM_WIDTH}px`}
    h="inherit"
    px={`${PADDING_X}px`}
    py={`${PADDING_Y}px`}
    borderRight="1px"
    borderStyle="solid"
    borderColor="secondary.900"
  >
    <Heading as="h4" fontSize="20px">
      {date}
      <Box as="span" fontSize="16px" color="secondary.500" ml="10px">
        {time}
      </Box>
    </Heading>
    <Heading
      as="h3"
      mt="20px"
      fontSize="18px"
      w="full"
      noOfLines={1}
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {title}
    </Heading>
    <Text
      mt="10px"
      fontSize="13px"
      noOfLines={8}
      overflowX="hidden"
      overflowY="auto"
      textOverflow="ellipsis"
    >
      {description}
    </Text>
    <Link
      display="inline-flex"
      alignItems="center"
      mt="auto"
      textTransform="uppercase"
      textDecoration="underline"
      lineHeight="20px"
      fontWeight="semibold"
      href={href}
      target="_blank"
    >
      JOIN
      <Image src="/assets/svg/home-arrow.svg" ml="20px" w="24px" h="24px" />
    </Link>
  </Flex>
)
