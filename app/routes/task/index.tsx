import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { RoutePath } from '~/constants/RoutePath'

export const loader: LoaderFunction = async () => {
  throw redirect(RoutePath.TaskTodo)
}
