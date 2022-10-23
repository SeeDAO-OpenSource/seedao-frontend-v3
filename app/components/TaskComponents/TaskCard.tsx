import {
  Box,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
  Link,
  Flex,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import React from 'react'
import { TaskStatus } from '~/api/models/Task'

export interface TaskCardProps {
  heading: string
  integral: ReactNode
  user: ReactNode
  description: ReactNode
  applyUrl?: string
  status: TaskStatus
}

export const TaskCardHeight = 324

export const TaskCard: React.FC<TaskCardProps> = ({
  heading,
  integral,
  user,
  description,
  applyUrl,
  status,
}) => {
  const statusTextMap: { [key in TaskStatus]: string } = {
    [TaskStatus.Todo]: 'TODO',
    [TaskStatus.OnProgress]: 'ON_PROGRESS',
    [TaskStatus.Completed]: 'DONE',
  }
  const statusIconMap: { [key in TaskStatus]: string } = {
    [TaskStatus.Todo]: '/assets/svg/task_status/todo.svg',
    [TaskStatus.OnProgress]: '/assets/svg/task_status/on_progress.svg',
    [TaskStatus.Completed]: '/assets/svg/task_status/done.svg',
  }

  return (
    <Flex
      direction="column"
      w="full"
      h={`${TaskCardHeight}px`}
      borderRight="1px"
      borderBottom="1px"
      borderStyle="solid"
      borderColor="secondary.900"
      p="30px"
    >
      <VStack spacing="15px" alignItems="flex-start">
        <Heading
          fontSize="20px"
          overflow="hidden"
          textOverflow="ellipsis"
          noOfLines={2}
        >
          {heading}
        </Heading>
        <HStack spacing="42px">
          <HStack spacing="8px">
            <Image src="/assets/svg/integral.svg" w="20px" h="20px" />
            <Box>{integral}</Box>
          </HStack>
          <HStack spacing="8px">
            <Image src="/assets/svg/user.svg" w="20px" h="20px" />
            <Box>{user}</Box>
          </HStack>
        </HStack>
        <Text
          color="secondary.800"
          lineHeight="160%"
          fontSize="14px"
          overflow="hidden"
          textOverflow="ellipsis"
          noOfLines={6}
          whiteSpace="pre-line"
        >
          {description}
        </Text>
      </VStack>
      <Flex justify="space-between" mt="auto">
        <Link
          display="inline-flex"
          alignItems="center"
          textDecoration="underline"
          fontWeight="semibold"
          fontSize="16px"
          href={applyUrl}
          target="_blank"
        >
          APPLY
          <Image src="/assets/svg/home-arrow.svg" w="16px" h="16px" ml="16px" />
        </Link>
        <HStack
          bg="adorn.900"
          color="primary.100"
          fontSize="12px"
          pl="7px"
          pr="6px"
          rounded="2px"
          my="auto"
          spacing="7px"
        >
          <Image
            src={statusIconMap[status] || statusIconMap[TaskStatus.Todo]}
            alt={statusTextMap[status] || statusTextMap[TaskStatus.Todo]}
            w="10px"
            h="10px"
          />
          <Box>{statusTextMap[status] || statusTextMap[TaskStatus.Todo]}</Box>
        </HStack>
      </Flex>
    </Flex>
  )
}
