import "../styles/global.css"
import { ChakraProvider, Container } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Navbar from "../components/Navbar"
import { newTheme } from "../styles/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={newTheme}>
      <Container margin="auto" padding="0" h="100vh">
        <Component {...pageProps} />
        <Navbar />
      </Container>
    </ChakraProvider>
  )
}
