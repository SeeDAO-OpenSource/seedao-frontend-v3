import { Box, Grid } from '@chakra-ui/react'
import type { TaskCardProps } from '~/components/TaskComponents'
import { TaskCard, TaskCardHeight } from '~/components/TaskComponents'
import { Virtuoso } from 'react-virtuoso'

const exampleTaskCard: TaskCardProps = {
  heading: 'TODO 周报文案整理【每周一】',
  integral: '15积分/次',
  user: 'BeiLin#0778',
  description:
    '⏰：工作量约为15-20分钟。 \n📝：工作内容为上一周SeeDAO发生事件的整理，具体任务内容详见周报整理指南',
  status: 'TODO',
}

export default function Todo() {
  return (
    <Box
      as={Virtuoso}
      h="full"
      totalCount={200}
      mr="-1px"
      fixedItemHeight={TaskCardHeight}
      itemContent={(index: number) => (
        <Grid templateColumns="repeat(2, calc(100% / 2))" key={index}>
          <TaskCard {...exampleTaskCard} />
          <TaskCard {...exampleTaskCard} />
        </Grid>
      )}
    />
  )
}
