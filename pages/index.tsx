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
import Buttonc from "../components/Button"
import HeadingC from "../components/Heading"

export default function Home() {
  const router = useRouter()
  return (
    <Flex px="4" py="8" justify={"center"}>
      <Box>
        <HeadingC>Boost your knowledge</HeadingC>
        <Card boxShadow="sm" shadow="outline" align="center" mb="16">
          <CardHeader>
            <p style={{ fontSize: 24, fontWeight: 600 }}>Start quez test</p>
          </CardHeader>
          <CardBody>
            <p style={{ textAlign: "center" }}>
              Proove that you are talented enough.
            </p>
          </CardBody>
          <CardFooter>
            <Buttonc onClick={() => router.push("/quez")}>Start</Buttonc>
          </CardFooter>
        </Card>
        <Card boxShadow="sm" shadow="outline" align="center">
          <CardHeader>
            <p style={{ fontSize: 24, fontWeight: 600 }}>Submit a quez</p>
          </CardHeader>
          <CardBody>
            <p style={{ textAlign: "center" }}>
              Submit quez and make our question libraray more stronger
            </p>
          </CardBody>
          <CardFooter>
            <Buttonc>Submit</Buttonc>
          </CardFooter>
        </Card>
      </Box>
    </Flex>
  )
}
