import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
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
import { getUrlEnv } from '~/constants/url'
import { json } from '@remix-run/node'
import { EnvContext } from '~/hooks/useEnv'
import { getContractEnv } from '~/constants/contract'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'SEEDAO',
  viewport: 'width=device-width,initial-scale=1',
})

export function loader() {
  const URL_ENV = getUrlEnv()
  return json({
    PUBLIC_ENV: {
      ...URL_ENV,
      ...getContractEnv(),
    },
  })
}

export default function App() {
  const outlet = useOutlet()
  const location = useLocation()
  const loaderData = useLoaderData()
  const PUBLIC_ENV = loaderData?.PUBLIC_ENV || {}

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <Center as="body" minW={`${MAX_WIDTH}px`} minH="100vh">
        <EnvContext.Provider value={PUBLIC_ENV}>
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
        </EnvContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Center>
    </html>
  )
}
