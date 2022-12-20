import { Box, Button, useColorMode } from "@chakra-ui/react"
import Head from "next/head"

export default function Settings() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Head><title>Settings</title></Head>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  )
}
