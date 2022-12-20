import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Loading from "../components/Loading"

export default function Dashboard() {
  return (
    <Box>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Loading />
    </Box>
  )
}
