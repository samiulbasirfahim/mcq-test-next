import { ArrowDownIcon, ArrowUpIcon, SettingsIcon } from "@chakra-ui/icons"
import Image from "next/image"
import {
  Box,
  Flex,
  Link,
  Spacer,
  Center,
  Collapse,
  useDisclosure,
  Button,
} from "@chakra-ui/react"

export default function Navbar() {
  const iconProp = {
    width: 20,
    height: 20,
  }

  const { isOpen, onToggle } = useDisclosure()

  return (
    <div style={{ marginBottom: !isOpen ? 80 : 0 }}>
      <Box width="full" position="fixed" bottom="0">
        <Center onClick={onToggle} py={2} bg="secondary">
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </Center>
        <Collapse in={!isOpen}>
          <Flex px={8} py={4} bg="secondary">
            <Center>
              <Link href="/">
                <Image
                  src="/icons/home.png"
                  alt="home"
                  width={iconProp.width}
                  height={iconProp.height}
                />
              </Link>
            </Center>
            <Spacer />
            <Center>
              <Link href="/dashboard">
                <Image
                  src="/icons/dashboard.png"
                  alt="dashboard"
                  width={iconProp.width}
                  height={iconProp.height}
                />
              </Link>
            </Center>
            <Spacer />
            <Center>
              <Link href="/ranking">
                <Image
                  src="/icons/ranking.png"
                  alt="ranking"
                  width={iconProp.width + 3}
                  height={iconProp.height + 3}
                />
              </Link>
            </Center>
            <Spacer />
            <Center>
              <Link href="/settings">
                <Image
                  src="/icons/settings.png"
                  alt="settings"
                  width={iconProp.width + 4}
                  height={iconProp.height + 4}
                />
              </Link>
            </Center>
          </Flex>
        </Collapse>
      </Box>
    </div>
  )
}
