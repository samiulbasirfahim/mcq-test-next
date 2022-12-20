import { Card, Center, Divider, Flex, Text } from "@chakra-ui/react"

export default function CoomingSoon() {
  return (
    <Flex
      alignItems={"center"}
      direction={"column"}
      justifyContent={"center"}
      my={"30"}
    >
      <Card p={5}>
        <Text pt={10}>Cooming soon</Text>
        <Divider pt={10} />
        <Text pt={10}>I will add this feature as soon as possible</Text>
      </Card>
    </Flex>
  )
}
