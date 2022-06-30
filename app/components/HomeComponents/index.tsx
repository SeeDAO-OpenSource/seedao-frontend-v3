import type { BoxProps, HeadingProps } from '@chakra-ui/react'
import { Box, VStack, HStack, Heading, Text, Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import React from 'react'

export * from './HomePageScrollItem'
export * from './HomePageScrollContainer'
export * from './SerialNumberContainer'
export * from './ScrollButtons'

export const PADDING_Y = 25
export const PADDING_X = 30

export const Indicator: React.FC<{
  keyName: ReactNode
  value: ReactNode
  valueUnit: ReactNode
}> = ({ keyName, value, valueUnit }) => (
  <VStack align="flex-start" spacing="0" fontWeight="400">
    <HStack align="flex-end" spacing="0">
      <Box fontSize="48px" lineHeight="48px">
        {value}
      </Box>
      <Box fontSize="28px" lineHeight="28px">
        {valueUnit}
      </Box>
    </HStack>
    <Box textTransform="uppercase" fontSize="14px">
      {keyName}
    </Box>
  </VStack>
)

export const HomeHeading: React.FC<
  HeadingProps & { sub: ReactNode; subProps?: BoxProps }
> = ({ children, sub, subProps, ...props }) => (
  <Heading as="h2" textTransform="uppercase" position="relative" {...props}>
    {children}
    <Box
      as="sup"
      fontSize="16px"
      top="-13px"
      lineHeight="16px"
      ml="8px"
      fontWeight="500"
      style={{ writingMode: 'inherit' }}
      {...subProps}
    >
      {sub}
    </Box>
  </Heading>
)

export const Projects: React.FC = () => (
  <Flex w="full" direction="column">
    <Box
      py={`${PADDING_Y}px`}
      px={`${PADDING_X}px`}
      borderBottom="1px"
      borderStyle="solid"
      borderColor="secondary.900"
    >
      <HomeHeading sub="孵化项目">Projects</HomeHeading>
    </Box>
    <Flex
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
        <Heading as="h2">Web3 大学</Heading>
        <Text mt="20px" fontSize="16px">
          在Web3建设一座没有围墙的大学。让行业先驱决定方向，让学者决定方式，让学生决定课程。让“链上学术共同体”在这里发生。
        </Text>
      </Flex>
      <Box w="260px" bg="rgba(255, 255, 255, 0.1)" />
      {/* TODO: IMAGE */}
    </Flex>
  </Flex>
)
