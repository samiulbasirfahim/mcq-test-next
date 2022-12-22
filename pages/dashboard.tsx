import {
  ArrowForwardIcon,
  ArrowLeftIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons"
import {
  Box,
  Button,
  Center,
  Collapse,
  Divider,
  Grid,
  Heading,
  Stack,
  StackDivider,
  TagLeftIcon,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import Loading from "../components/Loading"
import RowTable from "../components/rowTable"
import StatCard from "../components/statCard"
import apiRoutes from "../utilities/apiRoutes"

export default function Dashboard() {
  const { isOpen, onToggle } = useDisclosure()
  const router = useRouter()
  const userId = router?.query?.id
  const userFromLocal: any = localStorage.getItem("user")
  const { _id } = JSON.parse(userFromLocal)
  const [user, setUser] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)
  const toast = useToast()
  const toastIdRef = useRef<any>()


  function goQuez () {
    router.push("/quez")
  }

  useEffect(() => {
    fetch(`${apiRoutes.getUser}?id=${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false)
        if (!data.status) {
          setUser(data)
          console.log(data)
        } else {
          toastIdRef.current = toast({
            description: "Something wrong, Can't load user data",
            duration: 1000,
          })
        }
      })
  }, [userId])
  return isLoading ? (
    <Loading />
  ) : (
    user && (
      <Box px={4} py={8}>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Box>
          <Center>
            <Heading size="lg" mb="4" fontFamily="fantasy">
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
              {!isOpen ? (
                <Box>
                  Show stats <ViewIcon />
                </Box>
              ) : (
                <Box>
                  Hide stats <ViewOffIcon />
                </Box>
              )}
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Grid
                p="4"
                color="white"
                mb="4"
                bg="secondary"
                roundedBottom="sm"
                shadow="sm"
                templateColumns={"repeat(2, 1fr)"}
                gap="6"
              >
                <StatCard property={"Points"} value={user.point} />
                <StatCard
                  property={"Corrected"}
                  value={user.totalCorrectedQuestion}
                />
                <StatCard
                  property="Answared"
                  value={user.totalAnsweredQuestion}
                />
                <StatCard
                  property="Submitted"
                  value={user.totalSubmitedQuestion}
                />
              </Grid>
            </Collapse>
          </Box>
          {user.history && (
            <Box border="2px" borderColor="secondary" rounded="md" p="2">
              <Text mb="2">History</Text>
              {!user.history[0].category ? (
                <>
                  <Text>You didn't complete any quez</Text>
                  <Button onClick={goQuez} bg="secondary" size="md" p="2" my="2">
                    <Text>
                      Start quez {"     "}
                      <ArrowForwardIcon />
                    </Text>
                  </Button>
                </>
              ) : (
                <>
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
                    {user.history &&
                      user.history.map((history: any) => {
                        if (history.category) {
                          return (
                            <RowTable
                              property={history?.category}
                              value={history?.percantage}
                            />
                          )
                        }
                      })}
                  </Stack>
                </>
              )}
            </Box>
          )}
        </Box>
      </Box>
    )
  )
}
