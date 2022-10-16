import { taskCardListFactory } from '~/components/TaskCardList'
import { TaskStatus } from '~/api/models/Task'

export default taskCardListFactory({
  status: TaskStatus.Completed,
  columnCount: 3,
})
