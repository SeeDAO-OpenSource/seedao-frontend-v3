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
import { Flex, Box } from '@chakra-ui/react'
import { theme } from '~/themes'
import { MAX_WIDTH } from '~/constants'
import { NavigationBar } from '~/components/NavigationBar'
import { AnimatePresence } from 'framer-motion'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
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
      <body>
        <ChakraProvider theme={theme}>
          <DAppProvider config={{}}>
            <Flex
              direction="column"
              w={`${MAX_WIDTH - 2}px`}
              align="center"
              mx="auto"
              border="1px"
              borderTop="0"
              borderStyle="solid"
              borderColor="secondary.900"
              minH="calc(100vh - 2px)"
              position="relative"
              userSelect="none"
            >
              <NavigationBar />
              <AnimatePresence initial={false}>
                <Flex
                  direction="column"
                  w="full"
                  flex={1}
                  key={location.pathname.split('/')[0]}
                >
                  {outlet}
                </Flex>
              </AnimatePresence>
            </Flex>
          </DAppProvider>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
