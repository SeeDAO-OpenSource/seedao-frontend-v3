import type {
  UseToastOptions,
  CreateToastFnReturn,
  RenderProps,
} from '@chakra-ui/react'
import { useToast as useRowToast } from '@chakra-ui/react'
import { Toast } from '~/components/Toast'

export function useToast(
  defaultOptions?: UseToastOptions
): CreateToastFnReturn {
  return useRowToast({
    render(props: RenderProps): React.ReactNode {
      return <Toast {...props} />
    },
    position: 'top-right',
    ...defaultOptions,
  })
}
