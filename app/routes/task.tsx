import {
  TASK_FILTER_WIDTH,
  EVENT_TITLE_WIDTH,
  EVENT_SEARCH_BAR_HEIGHT,
  COLLAPSE_BAR_WIDTH,
} from '~/constants'
import { Flex, Grid, Image, Box } from '@chakra-ui/react'
import { HomeHeading } from '~/components/HomeComponents'
import { Search } from '~/components/EventComponents'
import { Filter } from '~/components/Filter'
import { CollapseBar } from '~/components/CollapseBar'
import { RoutePath } from '~/constants/RoutePath'
import Todo from './task/todo'
import OnProgress from './task/on_progress'
import Done from './task/done'
import { useLocation } from '@remix-run/react'
import { Fade } from '~/components/Fade'

export default function Task() {
  const location = useLocation()
  const isTodoPage = location.pathname === RoutePath.TaskTodo
  const isOnProgressPage = location.pathname === RoutePath.TaskOnProgress
  const isDonePage = location.pathname === RoutePath.TaskDone

  const todoCount = 20
  const onProgressCount = 40
  const doneCount = 80

  return (
    <Grid
      templateRows={`${EVENT_SEARCH_BAR_HEIGHT}px calc(100% - ${EVENT_SEARCH_BAR_HEIGHT}px)`}
      h="full"
    >
      <Grid
        templateColumns={`${EVENT_TITLE_WIDTH}px calc(100% - ${EVENT_TITLE_WIDTH}px - ${TASK_FILTER_WIDTH}px) ${TASK_FILTER_WIDTH}px`}
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
          <Image src="/assets/png/task.png" w="40px" h="40px" />
          <HomeHeading
            color="primary.100"
            sub="任务"
            ml="8px"
            subProps={{ fontWeight: 'semibold' }}
          >
            Task
          </HomeHeading>
        </Flex>
        <Search
          borderRight="1px"
          borderStyle="solid"
          borderColor="secondary.900"
        />
        <Filter />
      </Grid>
      <Box w="full" h="full" position="relative" overflow="hidden">
        <Grid
          w={`calc(100% - ${TASK_FILTER_WIDTH}px)`}
          templateColumns={`${COLLAPSE_BAR_WIDTH}px calc(100% - ${COLLAPSE_BAR_WIDTH}px)`}
          templateRows="100%"
          h="full"
          position="absolute"
          top="0"
          left="0"
          bg="primary.100"
          transition="300ms"
        >
          <CollapseBar to={RoutePath.TaskTodo}>
            <HomeHeading sub={`待办任务 ${todoCount}`}>TODO</HomeHeading>
          </CollapseBar>
          <Fade isOpen={isTodoPage} h="full">
            <Todo></Todo>
          </Fade>
        </Grid>
        <Grid
          w={`calc(100% - ${COLLAPSE_BAR_WIDTH * 2 - 5}px)`}
          templateRows="100%"
          templateColumns={`${COLLAPSE_BAR_WIDTH}px calc(100% - ${COLLAPSE_BAR_WIDTH}px)`}
          h="full"
          borderLeft="1px"
          borderRight="1px"
          borderStyle="solid"
          borderColor="secondary.900"
          position="absolute"
          top="0"
          left={`calc(100% - ${TASK_FILTER_WIDTH}px - 1px)`}
          bg="primary.100"
          transition="300ms"
          style={{
            transform:
              isOnProgressPage || isDonePage
                ? `translateX(calc(-100% + ${
                    TASK_FILTER_WIDTH - COLLAPSE_BAR_WIDTH + 6
                  }px))`
                : undefined,
          }}
        >
          <CollapseBar to={RoutePath.TaskOnProgress}>
            <HomeHeading sub={`进行中 ${onProgressCount}`}>
              On Progress
            </HomeHeading>
          </CollapseBar>
          <Fade isOpen={isOnProgressPage || isTodoPage} h="full">
            <OnProgress></OnProgress>
          </Fade>
        </Grid>
        <Grid
          w={`calc(100% - ${COLLAPSE_BAR_WIDTH * 2}px)`}
          templateRows="100%"
          templateColumns={`${COLLAPSE_BAR_WIDTH}px calc(100% - ${COLLAPSE_BAR_WIDTH}px)`}
          h="full"
          borderLeft="1px"
          borderRight="1px"
          borderStyle="solid"
          borderColor="secondary.900"
          position="absolute"
          top="0"
          right={`calc(-100% + ${COLLAPSE_BAR_WIDTH * 3 - 4}px)`}
          bg="primary.100"
          transition="300ms"
          style={{
            transform: isDonePage
              ? `translateX(calc(-100% + ${COLLAPSE_BAR_WIDTH - 3}px))`
              : undefined,
          }}
        >
          <CollapseBar to={RoutePath.TaskDone}>
            <HomeHeading sub={`已完成 ${doneCount}`}>Done</HomeHeading>
          </CollapseBar>
          <Fade isOpen={isDonePage} h="full">
            <Done></Done>
          </Fade>
        </Grid>
      </Box>
    </Grid>
  )
}
