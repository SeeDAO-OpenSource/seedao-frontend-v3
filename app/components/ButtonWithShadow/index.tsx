import type { ButtonProps } from '@chakra-ui/react'
import { useToken } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, Icon } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

export const ButtonWithShadow = forwardRef<
  HTMLButtonElement,
  ButtonProps & { bg: string }
>(({ bg, children, ...props }, ref) => {
  const [fill] = useToken('colors', [bg])
  return (
    <Button
      ref={ref}
      variant="unstyled"
      rounded="0"
      lineHeight="44px"
      h="44px"
      display="inline-flex"
      fontSize="24px"
      {...props}
    >
      <Box
        bg={bg}
        as="span"
        display="inline-flex"
        pl="16px"
        pr="8px"
        alignItems="center"
      >
        {children}
      </Box>
      <Icon viewBox="0 0 17 44" h="inherit" w="auto" ml="2px">
        <rect width="4" height="44" fill={fill} />
        <rect x="6" width="2" height="44" fill={fill} />
        <rect x="10" width="1" height="44" fill={fill} />
        <rect x="13" width="1" height="44" fill={fill} />
        <rect x="16" width="1" height="44" fill={fill} />
      </Icon>
    </Button>
  )
})
