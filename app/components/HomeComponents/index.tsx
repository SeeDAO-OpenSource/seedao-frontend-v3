import { Box, Heading, Text, Flex, Image, HStack, Link } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import React from 'react'
import { HeadingWithSub } from '~/components/HeadingWithSub'
import type { LinkType } from '~/data/IncubatinProjectItems'
import {
  IncubatinProjectItems,
  LinkTypeSet,
} from '~/data/IncubatinProjectItems'

export * from './HomePageScrollItem'
export * from './HomePageScrollContainer'
export * from './SerialNumberContainer'
export * from './ScrollButtons'

export const PADDING_Y = 25
export const PADDING_X = 30

export const LinkTypeIconMap: { [key in LinkType]: ReactNode } = {
  website: (
    <Image src="/assets/svg/website.svg" alt="website" w="20px" h="20px" />
  ),
  notion: (
    <Image src="/assets/svg/social/notion.svg" alt="notion" w="20px" h="20px" />
  ),
  discord: (
    <Image
      src="/assets/svg/social/discord.svg"
      alt="discord"
      w="20px"
      h="20px"
    />
  ),
}

export const Projects: React.FC = () => (
  <Flex w="full" direction="column">
    <Box
      py={`${PADDING_Y}px`}
      px={`${PADDING_X}px`}
      borderBottom="1px"
      borderStyle="solid"
      borderColor="secondary.900"
    >
      <HeadingWithSub sub="孵化项目">Projects</HeadingWithSub>
    </Box>
    {IncubatinProjectItems.map((project, i) => (
      <Flex
        key={i}
        h="380px"
        borderBottom="1px"
        borderStyle="solid"
        borderColor="secondary.900"
      >
        <Flex
          flex={1}
          pl={`${PADDING_X}px`}
          pr="50px"
          py={`${PADDING_Y}px`}
          direction="column"
        >
          <Heading as="h2">{project.title}</Heading>
          <Text mt="20px" fontSize="16px">
            {project.description}
          </Text>
          <HStack mt="auto">
            {LinkTypeSet.filter((type) => project.link[type]).map((type) => (
              <Link key={type} href={project.link[type]} target="_blank">
                {LinkTypeIconMap[type]}
              </Link>
            ))}
          </HStack>
        </Flex>
        <Image
          src={project.img}
          alt={project.title}
          w="260px"
          h="full"
          objectFit="cover"
          fallback={<Box w="260px" bg="rgba(255, 255, 255, 0.1)" />}
        />
      </Flex>
    ))}
  </Flex>
)
