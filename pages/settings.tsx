import { Box, Button, useColorMode } from "@chakra-ui/react"
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
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Button onClick={logOut}>Log out</Button>
    </Box>
  )
}
