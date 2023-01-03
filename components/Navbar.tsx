import Image from "next/image"
import {
  Flex,
  Spacer,
  Center,
  Collapse,
  useDisclosure,
  Button,
  Container,
  Box,
  useColorMode,
} from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function Navbar({ isAdmin }: any) {
  const iconProp = {
    width: 20,
    height: 20,
  }
  console.log(isAdmin)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  if (router.pathname === "/login" || router.pathname === "/register") {
    return <Box></Box>
  }
  return (
    <div style={{ marginTop: "10vh" }}>
      <Container position="fixed" bottom="0" px="0">
        <Flex p={4} bg={colorMode === "light" ? "gray.100" : "secondary"} m="0">
          <Center>
            <Button onClick={() => router.push("/")}>
              <Image
                src="/icons/home.png"
                alt="home"
                width={iconProp.width}
                height={iconProp.height}
              />
            </Button>
          </Center>
          <Spacer />
          <Center>
            <Button onClick={() => router.push("/dashboard")}>
              <Image
                src="/icons/dashboard.png"
                alt="dashboard"
                width={iconProp.width}
                height={iconProp.height}
              />
            </Button>
          </Center>
          <Spacer />
          <Center>
            <Button onClick={() => router.push("/ranking")}>
              <Image
                src="/icons/ranking.png"
                alt="ranking"
                width={iconProp.width + 3}
                height={iconProp.height + 3}
              />
            </Button>
          </Center>
          {isAdmin && (
            <>
              <Spacer />
              <Center>
                <Button onClick={() => router.push("/admin")}>
                  <Image
                    src="/icons/admin.png"
                    alt="admin"
                    width={iconProp.width + 4}
                    height={iconProp.height + 4}
                  />
                </Button>
              </Center>
            </>
          )}
          <Spacer />
          <Center>
            <Button onClick={() => router.push("/settings")}>
              <Image
                src="/icons/settings.png"
                alt="settings"
                width={iconProp.width + 4}
                height={iconProp.height + 4}
              />
            </Button>
          </Center>
        </Flex>
      </Container>
    </div>
  )
}
