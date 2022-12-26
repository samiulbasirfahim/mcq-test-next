import { InfoIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import HeadingC from "../components/Heading"
import Loading from "../components/Loading"
import apiRoutes from "../utilities/apiRoutes"

export default function Login() {
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  function showPassFunc() {
    setShowPass(!showPass)
  }

  function handleLogin(e: any) {
    e.preventDefault()
    const loginInfo = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    if (loginInfo.email && loginInfo.password) {
      setIsLoading(true)
      fetch(apiRoutes.loginUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      })
        .then((res) => res.json())
        .then((data: any) => {
          if (!data.status) {
            if (data.message) {
              setError(data.message)
              setIsLoading(false)
            }
          } else if (data.status) {
            const stringifyUser = JSON.stringify(data.user)
            localStorage.setItem("user", stringifyUser)
            router.push("/")
            setIsLoading(false)
          }
        })
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Flex
      px="4"
      py="8"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Head>
        <title>Login</title>
      </Head>
      <HeadingC>Login here</HeadingC>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <InputGroup size="sm">
            <InputLeftAddon>email</InputLeftAddon>
            <Input
              type="email"
              placeholder="email"
              name="email"
              required={true}
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon>password</InputLeftAddon>
            <Input
              type={!showPass ? "password" : "text"}
              placeholder="password"
              name="password"
              required={true}
            />
            <InputRightAddon onClick={showPassFunc} cursor="pointer">
              {!showPass ? <ViewIcon /> : <ViewOffIcon />}
            </InputRightAddon>
          </InputGroup>
          {error && (
            <Alert size="sm" py="2" rounded="sm" status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <Input
            size="sm"
            rounded="sm"
            type="submit"
            cursor="pointer"
            value="Login"
          />
        </Stack>
      </form>
      <Text cursor="pointer" mt="5" onClick={() => router.push("/register")}>
        Create an account?
      </Text>
    </Flex>
  )
}
