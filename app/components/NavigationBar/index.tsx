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
} from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import React from 'react'
import { getNavButtonProps } from '~/themes'

export const NAVIGATION_BAR_HEIGHT = 68

const NavButton: React.FC<ButtonProps> = ({
  children,
  colorScheme = 'secondary',
  ...props
}) => (
  <Button
    variant="unstyled"
    textTransform="uppercase"
    {...getNavButtonProps(colorScheme)}
    {...props}
  >
    {children}
  </Button>
)

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
  const splitLineEl = <Box bg="#fff" h="14px" w="2px" mx="16px" />
  return (
    <Flex
      w="full"
      h={`${NAVIGATION_BAR_HEIGHT}px`}
      align="center"
      px="20px"
      borderTop="1px"
      borderBottom="1px"
      borderStyle="solid"
      borderColor="secondary.900"
      position="sticky"
      top="0"
      bg="primary.100"
      zIndex={1}
      mb="-1px"
    >
      <Image src="/assets/svg/logo.svg" w="144px" h="22px" mr="4px" />
      {splitLineEl}
      <HStack spacing="16px">
        <NavButton>Home</NavButton>
        <Menu placement="bottom">
          <MenuButton {...getNavButtonProps()} textTransform="uppercase">
            Event
          </MenuButton>
          <MenuList>
            <MenuItem>EVENT</MenuItem>
            <MenuItem>TASK</MenuItem>
          </MenuList>
        </Menu>
        <NavButton>Deschool</NavButton>
        <NavButton>govern</NavButton>
        <Menu placement="bottom">
          <MenuButton {...getNavButtonProps()} textTransform="uppercase">
            Mint
          </MenuButton>
          <MenuList>
            <MenuItem>SGN</MenuItem>
            <MenuItem>POAP</MenuItem>
          </MenuList>
        </Menu>
        <NavButton>Member</NavButton>
        {splitLineEl}
        <NavButton colorScheme="adorn">C-Combinator</NavButton>
        {splitLineEl}
      </HStack>
      <Side />
    </Flex>
  )
}
