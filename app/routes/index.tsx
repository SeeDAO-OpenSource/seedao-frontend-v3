import { redirect } from '@remix-run/node'

export const loader = async () => {
  throw redirect('/home')
}

export default function Index() {
  return <div />
}
