import React from 'react'
import type { ButtonProps, StackProps } from '@chakra-ui/react'
import { Button, HStack, Image } from '@chakra-ui/react'

export const ScrollButtons: React.FC<
  StackProps & {
    leftButtonProps?: ButtonProps
    rightButtonProps?: ButtonProps
  }
> = ({ leftButtonProps, rightButtonProps, ...props }) => {
  const buttonProps: ButtonProps = {
    variant: 'unstyled',
    h: '32px',
    w: '32px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    bg: 'secondary.900',
    rounded: '0',
    minW: 'unset',
  }

  return (
    <HStack spacing="8px" {...props}>
      <Button {...buttonProps} {...leftButtonProps}>
        <Image src="/assets/svg/scroll-arrow-left.svg" w="20px" />
      </Button>
      <Button {...buttonProps} {...rightButtonProps}>
        <Image src="/assets/svg/scroll-arrow-right.svg" w="20px" />
      </Button>
    </HStack>
  )
}
