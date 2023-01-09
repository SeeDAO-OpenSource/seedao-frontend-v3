import type { ReactNode } from 'react'
import React, { useMemo } from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'

export const Indicator: React.FC<{
  keyName: ReactNode
  value?: ReactNode
  valueUnit: ReactNode
}> = ({ keyName, value = '-', valueUnit }) => {
  const abbreviatedValue = useMemo(() => {
    if (typeof value === 'number' && value > 1000) {
      const valueWithFixed = (value / 1000).toFixed(0)
      return (
        (valueWithFixed[valueWithFixed.length - 1] === '0' &&
        valueWithFixed[valueWithFixed.length - 2] === '.'
          ? valueWithFixed.substring(0, valueWithFixed.length - 2)
          : valueWithFixed) + 'k'
      )
    }
    return value
  }, [value])
  return (
    <VStack align="flex-start" spacing="0" fontWeight="400">
      <HStack align="flex-end" spacing="0">
        <Box fontSize="48px" lineHeight="48px">
          {abbreviatedValue}
        </Box>
        {value === '-' ? null : (
          <Box fontSize="28px" lineHeight="28px">
            {valueUnit}
          </Box>
        )}
      </HStack>
      <Box textTransform="uppercase" fontSize="14px">
        {keyName}
      </Box>
    </VStack>
  )
}
