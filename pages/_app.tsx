import "../styles/global.css"
import { ChakraProvider, Container } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Navbar from "../components/Navbar"
import { newTheme } from "../styles/theme"
import { useEffect, useState } from "react"
import login from "../utilities/login"
import { useRouter } from "next/router"
import Loading from "../components/Loading"

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    if (localStorage) {
      const user: any = localStorage.getItem("user")
      const parsedUser = JSON.parse(user)
      login(parsedUser, setIsLoading, router)
    }
  }, [])
  return isLoading ? (
    <Loading />
  ) : (
    <ChakraProvider theme={newTheme}>
      <Container margin="auto" padding="0" h="100vh">
        <Component {...pageProps} />
        <Navbar />
      </Container>
    </ChakraProvider>
  )
}
