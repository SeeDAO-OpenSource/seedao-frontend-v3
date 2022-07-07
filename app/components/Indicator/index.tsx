import type { ReactNode } from 'react'
import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'

export const Indicator: React.FC<{
  keyName: ReactNode
  value: ReactNode
  valueUnit: ReactNode
}> = ({ keyName, value, valueUnit }) => (
  <VStack align="flex-start" spacing="0" fontWeight="400">
    <HStack align="flex-end" spacing="0">
      <Box fontSize="48px" lineHeight="48px">
        {value}
      </Box>
      <Box fontSize="28px" lineHeight="28px">
        {valueUnit}
      </Box>
    </HStack>
    <Box textTransform="uppercase" fontSize="14px">
      {keyName}
    </Box>
  </VStack>
)
