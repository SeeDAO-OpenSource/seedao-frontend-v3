export enum TaskStatus {
  Todo = 'todo',
  OnProgress = 'on_progress',
  Completed = 'completed',
}

export interface Task {
  subject: string
  content?: string
  workload?: string
  tasks?: string
  poster: string
  reward: string
  link: string
  status: TaskStatus
}
