import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import React from 'react'

export const IconS: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 98 98" {...props}>
      <path
        d="M14 98V84H0V70H28V84H70V56H14V42H0V14H14V0H84V14H98V28H70V14H28V42H84V56H98V84H84V98H14Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export const IconG: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 98 98" {...props}>
      <path
        d="M28 98V84H14V70H0V28H14V14H28V0H98V14H42V28H28V70H42V84H70V56H56V42H98V98H28Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export const IconN: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 98 98" {...props}>
      <path
        d="M0 98V0H28V14H42V28H56V42H70V0H98V98H70V70H56V56H42V42H28V98H0Z"
        fill="currentColor"
      />
    </Icon>
  )
}
