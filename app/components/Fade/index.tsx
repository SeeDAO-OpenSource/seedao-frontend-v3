import type { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const Fade: React.FC<{ isOpen: boolean } & BoxProps> = ({
  isOpen,
  children,
  style = {},
  ...props
}) => {
  const [isShowChildren, setIsShowChildren] = useState(true)
  const transition = 400
  useEffect(() => {
    if (isOpen) {
      setIsShowChildren(isOpen)
    } else {
      const timer = setTimeout(() => setIsShowChildren(isOpen), transition)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <Box
      style={{ opacity: isOpen ? 1 : 0, ...style }}
      transition={`${transition}ms`}
      {...props}
    >
      {isShowChildren ? children : null}
    </Box>
  )
}
