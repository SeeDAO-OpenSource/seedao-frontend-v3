import type { RenderProps } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  CloseButton,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'

export const Toast: React.FC<RenderProps> = (props) => {
  console.log(props)
  return (
    <Flex
      minH="44px"
      color="secondary.900"
      bg="primary.100"
      border="1px solid"
      borderColor="secondary.900"
      justify="flex-start"
      align="flex-start"
      p="16px"
      pos="relative"
    >
      <Flex>
        <Alert status={props.status} bg="none" p={0}>
          <AlertIcon />
        </Alert>
      </Flex>
      <Flex direction="column">
        <Heading fontSize="16px" lineHeight="24px">
          {props.title}
        </Heading>
        <Text fontSize="14px">{props.description}</Text>
      </Flex>
      <CloseButton
        onClick={props.onClose}
        pos="absolute"
        h="24px"
        top="16px"
        right="16px"
      />
    </Flex>
  )
}
