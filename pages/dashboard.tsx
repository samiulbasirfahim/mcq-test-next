import {
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Center,
  Collapse,
  Divider,
  Grid,
  Heading,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import Head from "next/head"
import RowTable from "../components/rowTable"
import StatCard from "../components/statCard"

export default function Dashboard() {
  const { isOpen, onToggle } = useDisclosure()
  const userFromLocal: any = localStorage.getItem("user")
  const user = JSON.parse(userFromLocal)
  return (
    <Box px={4} py={8}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box>
        <Center>
          <Heading size="lg" mb="2" fontFamily="fantasy">
            {user.name}
          </Heading>
        </Center>
        <Box mb="2">
          <Button
            width="full"
            roundedBottom={isOpen ? "none" : "md"}
            bg="secondary"
            onClick={onToggle}
          >
            {!isOpen ? "Show stats" : "Hide stats"}
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <Box
              display="flex"
              justifyContent="space-between"
              p="4"
              color="white"
              mb="4"
              bg="secondary"
              roundedBottom="sm"
              shadow="sm"
            >
              <StatCard property={"Points"} value="50" />
              <StatCard property={"Corrected"} value="3421" />
              <StatCard property="Total" value="4000" />
            </Box>
          </Collapse>
        </Box>

        <Box border="2px" borderColor="secondary" rounded="md" p="2">
          <Text mb="2">
            History
          </Text>
          <Grid
            bg="gray.00"
            rounded="sm"
            p="2"
            templateColumns={"repeat(2, 1fr)"}
            gap={4}
          >
            <Text fontSize="14" color="white">
              Category
            </Text>
            <Text fontSize="14" color="white">
              Percantage
            </Text>
          </Grid>
          <Divider mt="0" />
          <Stack divider={<StackDivider />}>
            <RowTable property={"fahim"} value={"25.7"} />
            <RowTable property={"fahim"} value={"32"} />
            <RowTable property={"fahim"} value={"76"} />
            <RowTable property={"fahim"} value={"98"} />
            <RowTable property={"fahim"} value={"34"} />
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
