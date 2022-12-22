import { Grid, Text } from "@chakra-ui/react"

export default function RowTable({ property, value }: any) {
  return (
    <Grid templateColumns={"repeat(2, 1fr)"} gap={4} py="0.5" px={4}>
      <Text fontSize="14" color="secondary">
        {property}
      </Text>
      <Text fontSize="14" color="secondary">
        {value}
      </Text>
    </Grid>
  )
}
