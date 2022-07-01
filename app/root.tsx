import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from '@remix-run/react'
import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider } from '@usedapp/core'
import { Grid, Box, Center } from '@chakra-ui/react'
import { theme } from '~/themes'
import {
  CONTAINER_HEIGHT,
  MAX_HEIGHT,
  MAX_WIDTH,
  NAVIGATION_BAR_HEIGHT,
  SHADOW_BORDER,
} from '~/constants'
import { NavigationBar } from '~/components/NavigationBar'
import { AnimatePresence } from 'framer-motion'
import { AnimationContainer } from '~/components/AnimationContainer'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'SEEDAO',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  const outlet = useOutlet()
  const location = useLocation()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <Center as="body" minW={`${MAX_WIDTH}px`} minH="100vh">
        <ChakraProvider theme={theme}>
          <DAppProvider config={{}}>
            <Grid
              templateRows={`${NAVIGATION_BAR_HEIGHT}px calc(100% - ${NAVIGATION_BAR_HEIGHT}px)`}
              w={`${MAX_WIDTH}px`}
              h="100vh"
              mx="auto"
              maxH={`${MAX_HEIGHT}px`}
              position="relative"
              userSelect="none"
            >
              <NavigationBar />
              <Box
                w="full"
                h="full"
                maxH={`${CONTAINER_HEIGHT}px`}
                flex={1}
                position="relative"
                style={{
                  perspective: 800,
                }}
              >
                <AnimatePresence initial={false}>
                  <AnimationContainer
                    key={location.pathname.split('/')[1]}
                    animation={location.pathname.split('/')[1]}
                    shadow={SHADOW_BORDER}
                    bg="primary.100"
                  >
                    {outlet}
                  </AnimationContainer>
                </AnimatePresence>
              </Box>
            </Grid>
          </DAppProvider>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Center>
    </html>
  )
}
