import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
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
import apiRoutes from "../utilities/apiRoutes"

export default function Register() {
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  function removeError() {
    setError("")
  }
  function handleRegister(e: any) {
    e.preventDefault()
    const registerInfo = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirm_password.value,
    }
    if (registerInfo.confirmPassword !== registerInfo.password) {
      return setError("Password and confirm password are not same")
    }
    if (
      registerInfo.name &&
      registerInfo.email &&
      registerInfo.password &&
      registerInfo.confirmPassword
    ) {
      fetch(`${apiRoutes.createUser}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerInfo.name,
          email: registerInfo.email,
          password: registerInfo.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 11000) {
            setError("Email must be unique")
            return e.target.reset()
          }
          if (!data?.code) {
            localStorage.setItem("user", JSON.stringify(data))
            router.push("/")
          }
        })
    }
  }
  function showPassFunc() {
    setShowPass(!showPass)
  }

  return (
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
      <HeadingC>Register here</HeadingC>
      <form onSubmit={handleRegister}>
        <Stack spacing={4}>
          <InputGroup size="sm">
            <InputLeftAddon>name</InputLeftAddon>
            <Input
              onChange={removeError}
              type="text"
              placeholder="Name"
              name="name"
              required={true}
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon>email</InputLeftAddon>
            <Input
              onChange={removeError}
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
              onChange={removeError}
              placeholder="password"
              minLength={8}
              name="password"
              required={true}
            />
            <InputRightAddon onClick={showPassFunc} cursor="pointer">
              {!showPass ? <ViewIcon /> : <ViewOffIcon />}
            </InputRightAddon>
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon>Conf pass</InputLeftAddon>
            <Input
              type={!showPass ? "password" : "text"}
              onChange={removeError}
              placeholder="Confirm password"
              name="confirm_password"
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
            value="Register"
          />
        </Stack>
      </form>
      <Text cursor="pointer" mt="5" onClick={() => router.push("/login")}>
        Already have an account?
      </Text>
    </Flex>
  )
}
