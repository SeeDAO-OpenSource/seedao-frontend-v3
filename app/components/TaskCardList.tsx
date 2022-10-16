import { Box, Grid } from '@chakra-ui/react'
import { TaskCard, TaskCardHeight } from '~/components/TaskComponents'
import { Virtuoso } from 'react-virtuoso'
import { useDataSource } from '~/hooks/TaskPage/useDataSource'
import { TaskStatus } from '~/api/models/Task'

export interface TaskCardListProps {
  status: TaskStatus
  columnCount: number
}

export function TaskCardList({ status, columnCount }: TaskCardListProps) {
  const { data: tasks } = useDataSource(status)
  return (
    <Box
      as={Virtuoso}
      h="full"
      totalCount={Math.ceil((tasks?.length || 0) / columnCount)}
      mr="-1px"
      fixedItemHeight={TaskCardHeight}
      itemContent={(index: number) => (
        <Grid
          templateColumns={`repeat(${columnCount}, calc(100% / ${columnCount}))`}
          key={index}
        >
          {new Array(columnCount)
            .fill(0)
            .map((_, i) => tasks?.[index * columnCount + i]!)
            .filter((item) => item)
            .map((item) => (
              <TaskCard
                key={item.subject}
                heading={item.subject}
                description={
                  <>
                    {item.workload} <br />
                    {item.content} <br />
                    {item.tasks}
                  </>
                }
                integral={item.reward}
                applyUrl={item.link}
                status={TaskStatus.Todo}
                user={item.poster}
              />
            ))}
        </Grid>
      )}
    />
  )
}

export function taskCardListFactory(props: TaskCardListProps) {
  return () => <TaskCardList {...props} />
}
