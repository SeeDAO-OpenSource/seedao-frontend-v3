import React from 'react'
import { Virtuoso } from 'react-virtuoso'
import type { BoxProps } from '@chakra-ui/react'
import { Box, Grid, Image } from '@chakra-ui/react'

export interface AvatarsBackgroundProps extends BoxProps {
  images: string[]
  activeIndex?: number
}

export const COLUMN_COUNT = 5
export const ITEM_SIZE = 140
export const AVATARS_BACKGROUND_ID = 'avatars_background_id'

export const AvatarsBackground: React.FC<AvatarsBackgroundProps> = ({
  images,
  activeIndex = 0,
  ...props
}) => {
  function getActiveIndexDistance(currentIndex: number): 0 | 1 | 2 {
    if (currentIndex === activeIndex) return 0
    if (
      Math.abs(Math.abs(currentIndex - activeIndex) - COLUMN_COUNT) < 2 ||
      Math.abs(currentIndex - activeIndex) < 2
    )
      return 1
    return 2
  }
  function getImageStyle(currentIndex: number) {
    const styleIndex = getActiveIndexDistance(currentIndex)
    const opacity = [1, 0.6, 0.4]
    const transform = ['scale(0.85)', 'scale(0.75)', 'scale(0.6)']
    const filter = ['blur(0px)', 'blur(5px)', 'blur(10px)']
    return {
      transform: transform[styleIndex] || transform[2],
      opacity: opacity[styleIndex] || opacity[2],
      filter: filter[styleIndex] || filter[2],
      boxShadow:
        styleIndex === 0
          ? '0 0 0 10px var(--chakra-colors-adorn-900)'
          : undefined,
    }
  }

  return (
    <Box
      id={AVATARS_BACKGROUND_ID}
      as={Virtuoso}
      h="full"
      totalCount={Math.ceil(images.length / COLUMN_COUNT)}
      mr="-1px"
      fixedItemHeight={ITEM_SIZE}
      transform="rotate(30deg)"
      transformOrigin="left top"
      itemContent={(index: number) => (
        <Grid
          templateColumns={`repeat(${COLUMN_COUNT}, calc(100% / ${COLUMN_COUNT}))`}
          key={index}
          h={`${ITEM_SIZE}px`}
          px={`${ITEM_SIZE}px`}
        >
          {new Array(COLUMN_COUNT)
            .fill(0)
            .map((_, i) => images[index * COLUMN_COUNT + i])
            .filter((src) => src)
            .map((src, i) => {
              const currentIndex = index * COLUMN_COUNT + i
              return (
                <Image
                  key={i}
                  src={src}
                  alt={`avatar-background-${i}`}
                  w="120px"
                  h="120px"
                  transition="200ms"
                  style={{
                    ...getImageStyle(currentIndex),
                  }}
                />
              )
            })}
        </Grid>
      )}
      {...props}
    />
  )
}
