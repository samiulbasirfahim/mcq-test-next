import { Box, Button, Grid, useColorMode } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Settings() {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const logOut = () => {
    localStorage.removeItem("user")
    router.push("login")
  }
  return (
    <Box>
      <Head>
        <title>Settings</title>
      </Head>
      <Grid gap="5" templateColumns="repeat(1, 1fr)" px="4" py="8">
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Button onClick={logOut}>Log out</Button>
      </Grid>
    </Box>
  )
}
