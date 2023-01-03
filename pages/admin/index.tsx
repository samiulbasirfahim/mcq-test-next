import { Box, Button, Grid } from "@chakra-ui/react"
import { useRouter } from "next/router"
import HeadingC from "../../components/Heading"

export default function Admin() {
  const router = useRouter()
  return (
    <Grid gap="5" templateColumns="repeat(1, 1fr)" px="4" py="8">
      <HeadingC>Admin panel</HeadingC>
      <Button onClick={() => router.push("/admin/questions")}>Question</Button>
      <Button onClick={() => router.push("/admin/categories")}>
        Categories
      </Button>
      <Button onClick={() => router.push("/admin/users")}>Users</Button>
    </Grid>
  )
}
