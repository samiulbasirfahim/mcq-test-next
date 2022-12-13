import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import HeadingC from "../components/Heading"

export default function Home() {
  const router = useRouter()
  return (
    <Flex px="4" py="8" justify={"center"}>
      <Box>
        <HeadingC>Boost your knowledge</HeadingC>
        <Card
          bg="gray.100"
          boxShadow="sm"
          shadow="outline"
          align="center"
          mb="16"
        >
          <CardHeader>
            <p style={{ fontSize: 24, fontWeight: 600 }}>Start quez test</p>
          </CardHeader>
          <CardBody>
            <p style={{ textAlign: "center" }}>
              Proove that you are talented enough.
            </p>
          </CardBody>
          <CardFooter>
            <Button
              onClick={(e) => router.push("/quez")}
              bg="#317773"
              color="#fff"
            >
              Start
            </Button>
          </CardFooter>
        </Card>
        <Card bg="gray.100" boxShadow="sm" shadow="outline" align="center">
          <CardHeader>
            <p style={{ fontSize: 24, fontWeight: 600 }}>Submit a quez</p>
          </CardHeader>
          <CardBody>
            <p style={{ textAlign: "center" }}>
              Submit quez and make our question libraray more stronger
            </p>
          </CardBody>
          <CardFooter>
            <Button bg="#317773" color="#fff">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </Flex>
  )
}
