import {
  Card,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react"

export default function StatCard({ property, value }: any) {
  return (
    <Card>
      <CardHeader mb="0">
        <Heading textAlign="center" fontFamily="operator mono" size="sm">
          {property}
        </Heading>
        <Center mt="2">
          <Text textAlign="center">{value}</Text>
        </Center>
      </CardHeader>
    </Card>
  )
}
