import type { ButtonProps } from '@chakra-ui/react'
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import React from 'react'
import { RoutePath } from '~/constants/RoutePath'
import { getNavButtonProps } from '~/themes'
import { Link as RemixLink, useLocation } from '@remix-run/react'
import { NAVIGATION_BAR_HEIGHT } from '~/constants'
import { useEnv } from '~/hooks/useEnv'

const NavButton: React.FC<ButtonProps & { active?: boolean; to?: string }> = ({
  children,
  colorScheme = 'secondary',
  active,
  to,
  ...props
}) => {
  const button = (
    <Button
      variant="unstyled"
      textTransform="uppercase"
      {...getNavButtonProps({ colorScheme, active })}
      {...props}
    >
      {children}
    </Button>
  )
  if (to) {
    return (
      <Link as={RemixLink} to={to}>
        {button}
      </Link>
    )
  }
  return button
}

const Side: React.FC = () => {
  const { account, activateBrowserWallet } = useEthers()
  return (
    <HStack
      h="20px"
      ml="auto"
      fontSize="16px"
      lineHeight="20px"
      fontWeight="semibold"
      borderLeft="2px"
      borderRight="2px"
      borderStyle="solid"
      borderColor="secondary.900"
      px="4px"
      spacing="4px"
    >
      <Image src="/assets/svg/navbar-decorate.svg" h="20px" w="auto" />
      {!account ? (
        <Button
          bg="secondary.900"
          color="primary.100"
          h="inherit"
          px="4px"
          rounded="1px"
        >
          <Box
            as="span"
            textTransform="uppercase"
            onClick={activateBrowserWallet}
          >
            Connect Wallet
          </Box>
        </Button>
      ) : (
        <>
          <Image
            src="/assets/svg/user-connected-wallet.svg"
            bg="secondary.900"
            w="20px"
            h="inherit"
            rounded="1px"
          />
          <Box bg="secondary.900" color="primary.100" px="4px" rounded="1px">
            {account.substring(0, 6)}...
            {account.substring(account.length - 4, account.length)}
          </Box>
        </>
      )}
    </HStack>
  )
}

export const NavigationBar: React.FC = () => {
  const location = useLocation()
  const splitLineEl = <Box bg="secondary.900" h="14px" w="2px" mx="16px" />
  const pathnamePart1 = location.pathname.split('/')[1]
  const { POAP_URL } = useEnv()

  return (
    <Flex
      w="full"
      h={`${NAVIGATION_BAR_HEIGHT}px`}
      align="center"
      px="20px"
      shadow="0px 0px 0px 1px var(--chakra-colors-secondary-900)"
      position="sticky"
      top="0"
      bg="primary.100"
      zIndex={1}
      mb="-1px"
    >
      <Image src="/assets/svg/logo.svg" w="144px" h="22px" mr="4px" />
      {splitLineEl}
      <HStack spacing="16px">
        <NavButton
          active={
            location.pathname === RoutePath.Home ||
            location.pathname === RoutePath.HomeRoadmap ||
            location.pathname === RoutePath.HomeAbout ||
            location.pathname === RoutePath.HomeStart
          }
          to={RoutePath.Home}
        >
          Home
        </NavButton>
        <Menu placement="bottom">
          <MenuButton
            {...getNavButtonProps({
              active:
                location.pathname === RoutePath.Event ||
                location.pathname === RoutePath.Task ||
                location.pathname === RoutePath.TaskDone ||
                location.pathname === RoutePath.TaskOnProgress ||
                location.pathname === RoutePath.TaskTodo,
            })}
            textTransform="uppercase"
          >
            Event
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link
                as={RemixLink}
                to={RoutePath.Event}
                display="flex"
                w="full"
                h="full"
                py="8px"
              >
                EVENT
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                as={RemixLink}
                to={RoutePath.TaskTodo}
                display="flex"
                w="full"
                h="full"
                py="8px"
              >
                TASK
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <NavButton
          active={
            pathnamePart1 === RoutePath.Deschool ||
            location.pathname === RoutePath.Deschool
          }
          to={RoutePath.Deschool}
        >
          Deschool
        </NavButton>
        <NavButton
          active={
            pathnamePart1 === RoutePath.Govern ||
            location.pathname === RoutePath.Govern
          }
          to={RoutePath.Govern}
        >
          govern
        </NavButton>
        <Menu placement="bottom">
          <MenuButton
            {...getNavButtonProps({
              active:
                pathnamePart1 === RoutePath.Sgn ||
                location.pathname === RoutePath.Sgn ||
                pathnamePart1 === RoutePath.Poap ||
                location.pathname === RoutePath.Poap,
            })}
            textTransform="uppercase"
          >
            Mint
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link
                as={RemixLink}
                to={RoutePath.Sgn}
                display="flex"
                w="full"
                h="full"
                py="8px"
              >
                SGN
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href={POAP_URL}
                target="_blank"
                display="flex"
                w="full"
                h="full"
                py="8px"
              >
                POAP
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <NavButton
          active={
            pathnamePart1 === RoutePath.Member ||
            location.pathname === RoutePath.Member
          }
          to={RoutePath.Member}
        >
          Member
        </NavButton>
        {splitLineEl}
        <NavButton colorScheme="adorn">C-Combinator</NavButton>
        {splitLineEl}
      </HStack>
      <Side />
    </Flex>
  )
}
