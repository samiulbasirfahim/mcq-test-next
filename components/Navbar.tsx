import Image from "next/image"
import {
  Flex,
  Spacer,
  Center,
  Collapse,
  useDisclosure,
  Button,
  Container,
} from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function Navbar() {
  const iconProp = {
    width: 20,
    height: 20,
  }

  const router = useRouter()

  return (
    <Container position="fixed" bottom="0" padding="0">
      <Flex p={4} bg="secondary" m="0">
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
  )
}
