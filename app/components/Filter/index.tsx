import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Filter: React.FC = () => {
  return (
    <Flex
      h="68px"
      textTransform="uppercase"
      align="center"
      fontSize="18px"
      px="30px"
    >
      <Image src="/assets/svg/filter.svg" w="24px" h="24px" mr="10px" />
      <Box>Filter</Box>
    </Flex>
  )
}
