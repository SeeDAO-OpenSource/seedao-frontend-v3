import React from 'react'
import type { GridProps } from '@chakra-ui/react'
import { Grid, Image, Input } from '@chakra-ui/react'

export const Search: React.FC<GridProps> = ({ ...props }) => {
  return (
    <Grid
      px="32px"
      templateColumns="24px calc(100% - 24px)"
      alignItems="center"
      gridGap="10px"
      {...props}
    >
      <Image src="/assets/svg/search.svg" w="24px" h="24px" />
      <Input
        placeholder="SEARCH GUILD / PROJECT / DISCORD"
        variant="unstyled"
        _placeholder={{ color: 'secondary.300' }}
      />
    </Grid>
  )
}
