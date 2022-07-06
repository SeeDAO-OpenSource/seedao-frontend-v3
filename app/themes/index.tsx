import { extendTheme } from '@chakra-ui/react'
import type { ThemeTypings } from '@chakra-ui/styled-system'

export const getNavButtonProps = (options?: {
  colorScheme?: ThemeTypings['colorSchemes']
  active?: boolean
}) => {
  const colorScheme = options?.colorScheme || 'secondary'
  return {
    fontWeight: 'normal',
    color: `${colorScheme}.600`,
    _hover: {
      bg: 'none',
      color: `${colorScheme}.900`,
      textDecoration: 'underline',
    },
    _active: {
      bg: 'none',
      color: `${colorScheme}.900`,
      textDecoration: 'underline',
    },
    ...(options?.active
      ? { color: `${colorScheme}.900`, fontWeight: 'semibold' }
      : {}),
  }
}

const font = `'Space Grotesk', -apple-system, BlinkMacSystemFont, Helvetica, Tahoma,Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif`

export const theme = extendTheme({
  initialColorMode: 'dark',
  shadows: {},
  styles: {
    global: {
      body: {
        bg: '#000',
        color: '#fff',
      },
    },
  },
  colors: {
    pass: {
      100: '#37FF87',
      200: '#37FF87',
      300: '#37FF87',
      400: '#37FF87',
      500: '#37FF87',
      600: '#37FF87',
      700: '#37FF87',
      800: '#37FF87',
      900: '#37FF87',
    },
    attention: {
      100: '#FF6737',
      200: '#FF6737',
      300: '#FF6737',
      400: '#FF6737',
      500: '#FF6737',
      600: '#FF6737',
      700: '#FF6737',
      800: '#FF6737',
      900: '#FF6737',
    },
    primary: {
      100: '#000',
      200: '#000',
      300: '#000',
      400: '#000',
      500: '#000',
      600: '#000',
      700: '#000',
      800: '#000',
      900: '#000',
    },
    secondary: {
      100: 'rgba(255, 255, 255, 0.1)',
      200: 'rgba(255, 255, 255, 0.2)',
      300: 'rgba(255, 255, 255, 0.3)',
      400: 'rgba(255, 255, 255, 0.4)',
      500: 'rgba(255, 255, 255, 0.5)',
      600: 'rgba(255, 255, 255, 0.6)',
      700: 'rgba(255, 255, 255, 0.7)',
      800: 'rgba(255, 255, 255, 0.8)',
      900: 'rgba(255, 255, 255, 1)',
    },
    adorn: {
      100: '#37FFFF',
      200: '#37FFFF',
      300: '#37FFFF',
      400: '#37FFFF',
      500: '#37FFFF',
      600: '#37FFFF',
      700: '#37FFFF',
      800: '#37FFFF',
      900: '#37FFFF',
    },
  },
  fonts: {
    body: font,
    heading: font,
  },
  components: {
    Menu: {
      baseStyle: {
        list: {
          px: '20px',
          py: '12px',
          borderRadius: '0',
          boxShadow: 'none',
          border: '1px solid secondary.900',
          bg: 'primary.100',
          minW: 'unset',
        },
        item: {
          px: 0,
          py: '8px',
          textAlign: 'center',
          display: 'block',
          ...getNavButtonProps(),
          _focus: {
            bg: 'none',
            textDecoration: 'underline',
          },
        },
        button: {
          fontWeight: 'semibold',
        },
      },
    },
  },
})
