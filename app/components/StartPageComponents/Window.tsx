import type { BoxProps, LinkProps } from '@chakra-ui/react'
import { Box, Grid, Image, Center, Link } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export interface WindowProps extends BoxProps {
  header: ReactNode
}

export interface WindowHeaderProps {
  icon: ReactNode
  text: ReactNode
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({ icon, text }) => {
  return (
    <Grid
      px="16px"
      gap="8px"
      fontSize="16px"
      textTransform="uppercase"
      w="full"
      templateColumns="24px calc(100% - 24px - 8px)"
      alignItems="center"
    >
      {icon}
      <Box as="span">{text}</Box>
    </Grid>
  )
}

export const WindowFooterLink: React.FC<LinkProps> = ({
  children,
  ...props
}) => {
  return (
    <Link
      textTransform="uppercase"
      w="full"
      h="52px"
      lineHeight="52px"
      bg="secondary.900"
      color="primary.100"
      display="block"
      fontSize="20px"
      textAlign="center"
      fontWeight="semibold"
      target="_blank"
      _hover={{
        textDecoration: 'none',
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

export const Window: React.FC<WindowProps> = ({
  header,
  children,
  ...props
}) => {
  return (
    <Box
      border="1px"
      borderStyle="solid"
      borderColor="secondary.900"
      w="460px"
      {...props}
    >
      <Grid
        h="40px"
        lineHeight="40px"
        templateColumns="calc(100% - 40px) 40px"
        borderBottom="1px"
        borderStyle="solid"
        borderColor="secondary.900"
      >
        <Box>{header}</Box>
        <Center
          borderLeft="1px"
          borderStyle="solid"
          borderColor="secondary.900"
        >
          <Image src="/assets/svg/close.svg" w="24px" h="24px" />
        </Center>
      </Grid>
      <Box>{children}</Box>
    </Box>
  )
}
