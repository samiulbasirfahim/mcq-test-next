import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Grid,
  Text,
} from "@chakra-ui/react"
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react"
import Buttonc from "./Button"

export default function Quez({
  question,
  options,
  correct,
  correctAnswerIndex,
  checkAnswer,
  nextQuestion,
  questionIndex,
}: any) {
  return (
    <Box px="4" py="8">
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        <Divider />
        <Card bg="primary">
          <CardBody>
            <Text>{question}</Text>
          </CardBody>
        </Card>
        {options?.length > 0 &&
          options.map(
            (
              option:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined,
              index: Key | null | undefined
            ) => {
              return (
                <Card
                  onClick={() => checkAnswer(index)}
                  bg={
                    correct === undefined
                      ? "highlight"
                      : correctAnswerIndex === index
                      ? "secondary"
                      : "danger"
                  }
                  cursor="pointer"
                  key={index}
                >
                  <CardBody>
                    <Text>{option}</Text>
                  </CardBody>
                </Card>
              )
            }
          )}
      </Grid>

      {correct !== undefined && (
        <Button onClick={() => nextQuestion(questionIndex)} mt={5}>
          Next
        </Button>
      )}
    </Box>
  )
}
