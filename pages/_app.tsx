import "../styles/global.css"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Navbar from "../components/Navbar"
import { newTheme } from "../styles/theme"



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={newTheme}>
      <Component {...pageProps} />
      <Navbar />
    </ChakraProvider>
  )
}
