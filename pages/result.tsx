import { Box } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Result() {
  const router = useRouter()
  const { totalCorrect, totalQuestion, category }: any = router.query
  const percentage = (totalCorrect / totalQuestion) * 100
  return (
    <Box>
      <Head>
        <title>Result</title>
      </Head>
      <p>
        {percentage < 35 && "Bad luck"} {percentage > 35 && percentage < 70}{" "}
      </p>
      category : {category}
      totalCorrect: {totalCorrect}
      totalQuestion: {totalQuestion}
    </Box>
  )
}
