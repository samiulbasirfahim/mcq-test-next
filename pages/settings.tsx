import { Box, Button, useColorMode } from "@chakra-ui/react"

export default function Settings() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  )
}
