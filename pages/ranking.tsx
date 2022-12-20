import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Loading from "../components/Loading"

export default function Rankings() {
  return (
    <Box>
      <Head>
        <title>Ranking</title>
      </Head>
      <Loading />
    </Box>
  )
}
