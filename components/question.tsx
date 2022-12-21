import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons"
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react"

export default function Question({
  quesion,
  approveQuestion,
  deleteQuestion,
}: any) {
  return (
    <Box>
      <Card>
        <Flex justifyContent="space-around" bg="primary" py="4">
          <Tag cursor="pointer">
            <EditIcon /> Edit
          </Tag>
          {quesion.condition === "pending" && (
            <Tag cursor="pointer" onClick={() => approveQuestion(quesion)}>
              <CheckIcon /> Aprrove
            </Tag>
          )}
          <Tag cursor="pointer" onClick={() => deleteQuestion(quesion._id)}>
            <DeleteIcon /> Delete
          </Tag>
        </Flex>
        <CardHeader>
          <Heading fontFamily={"Operator Mono"} size="md">
            {quesion.title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="2">
            <Box>
              <Heading
                fontFamily={"Operator Mono"}
                size="sm"
                textTransform="uppercase"
              >
                Option 1
              </Heading>
              <Text pt="2" fontSize="sm">
                {quesion.options[0]}
              </Text>
            </Box>
            <Box>
              <Heading
                fontFamily={"Operator Mono"}
                size="sm"
                textTransform="uppercase"
              >
                Options 2
              </Heading>
              <Text pt="2" fontSize="sm">
                {quesion.options[1]}
              </Text>
            </Box>
            <Box>
              <Heading
                fontFamily={"Operator Mono"}
                size="sm"
                textTransform="uppercase"
              >
                Options 3
              </Heading>
              <Text pt="2" fontSize="sm">
                {quesion.options[2]}
              </Text>
            </Box>
            <Box>
              <Heading
                fontFamily={"Operator Mono"}
                size="sm"
                textTransform="uppercase"
              >
                Options 4
              </Heading>
              <Text pt="2" fontSize="sm">
                {quesion.options[3]}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter bg="primary" flexDir={"column"} gap="2">
          <Heading fontFamily={"Operator Mono"} size="xs">
            Correct answer is: {quesion?.options[quesion?.correctAnswerIndex]}
          </Heading>
          <Heading fontFamily={"Operator Mono"} size="xs">
            Added by: {quesion?.addedBy?.name}
          </Heading>
        </CardFooter>
      </Card>
    </Box>
  )
}
