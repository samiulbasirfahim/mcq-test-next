import "../styles/global.css"
import {
  ChakraProvider,
  ColorModeScript,
  Container,
  extendTheme,
  ThemeConfig,
  useColorMode,
} from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Navbar from "../components/Navbar"
import { newTheme } from "../styles/theme"
import { useEffect, useState } from "react"
import login from "../styles/utilities/login"
import { useRouter } from "next/router"
import Loading from "../components/Loading"

export default function App({ Component, pageProps }: AppProps) {
  const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
  }
  const theme = extendTheme({ config })
  const [isAdmin, setIsAdmin] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    if (localStorage) {
      const user: any = localStorage.getItem("user")
      const parsedUser = JSON.parse(user)
      login(parsedUser, setIsLoading, router, setIsAdmin)
    }
  }, [])
  return isLoading ? (
    <Loading />
  ) : (
    <ChakraProvider theme={newTheme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container margin="auto" padding="0" h="100vh">
        <Component setIsAdmin={setIsAdmin} {...pageProps} />
        <Navbar isAdmin={isAdmin} />
      </Container>
    </ChakraProvider>
  )
}
