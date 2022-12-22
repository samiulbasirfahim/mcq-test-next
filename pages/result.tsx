import {
  Alert,
  AlertIcon,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Result() {
  const router = useRouter()
  const { totalCorrect, totalQuestion, category, percentage }: any =
    router.query

  return (
    <Flex
      px="4"
      py="8"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>Result</title>
      </Head>
      <Card align="center">
        <CardHeader>
          <Center>
            <p
              style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: 900,
              }}
            >
              Congratulations
            </p>
          </Center>
          <Text>You have just complete a quez test</Text>
        </CardHeader>
        <Flex flexDirection={"column"} px="2">
          <Center flexDir={"column"}>
            <Alert mb={5} rounded="xl" display="flex" flexDirection="column">
              <Text color="secondary" py="0">
                Total: {totalQuestion}{" "}
              </Text>
              <Text color="secondary" py="0">
                Correct: {totalQuestion}{" "}
              </Text>
            </Alert>
          </Center>
          <Center>
            {percentage >= 80 && (
              <Alert rounded="xl" status="success">
                <AlertIcon />
                Excellent.
              </Alert>
            )}
            {percentage >= 40 && percentage < 80 && (
              <Alert rounded="xl" status="warning">
                <AlertIcon />
                You did awesome. But you have to do better.
              </Alert>
            )}
            {percentage <= 40 && (
              <Alert rounded="xl" status="error">
                <AlertIcon />
                Good luck for next time.
              </Alert>
            )}
          </Center>
        </Flex>
        <CardFooter>
          <Button onClick={() => router.push("/dashboard")} colorScheme="blue">
            View dashboard
          </Button>
        </CardFooter>
      </Card>
    </Flex>
  )
}
