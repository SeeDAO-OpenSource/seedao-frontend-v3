import { useAPI } from '~/hooks/useAPI'
import useSWR from 'swr'
import { QueryKey } from '~/api/QueryKey'
import type { TaskStatus } from '~/api/models/Task'

export function useDataSource(status?: TaskStatus) {
  const api = useAPI()
  return useSWR([QueryKey.GetTask, status], async () => {
    const tasks = await api.getTask().then((res) => {
      if (!status) return res.tasks
      return res.tasks.filter((task) => task.status === status)
    })
    return tasks
  })
}
