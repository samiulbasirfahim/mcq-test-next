import { Box, Center, Progress } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading"
import Quez_component from "../../components/Quez"
import apiRoutes from "../../utilities/apiRoutes"

export default function Quez() {
  const [question_set, setQUestion_set] = useState<any>()
  const [correct, setCorrect] = useState<boolean | undefined>(undefined)
  const [correctAnswerIndex, setcorrectAnswerIndex] = useState<number>()
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [title, setTitle] = useState<string | number | undefined>()
  const [totalCorrect, setTotalCorrect] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [options, setOptions] = useState<[string] | undefined | any>()
  const [isLoading, setIsloading] = useState(true)
  const router = useRouter()
  const category = router.query.category

  function checkAnswer(index: number) {
    if (index === correctAnswerIndex) {
      setTotalCorrect(totalCorrect + 1)
      setCorrect(true)
    } else {
      setCorrect(false)
    }
  }

  function nextQuestion(question_index: number) {
    if (question_set.length - 1 !== question_index) {
      const newQuestionIndex = question_index + 1
      const newQuestion = {
        questionIndex: newQuestionIndex,
        options: question_set[newQuestionIndex].options,
        question: question_set[newQuestionIndex].title,
        correctAnswerIndex: question_set[newQuestionIndex].correctAnswerIndex,
      }
      setOptions(newQuestion.options)
      setTitle(newQuestion.question)
      setcorrectAnswerIndex(newQuestion.correctAnswerIndex as number)
      setQuestionIndex(newQuestion.questionIndex)
      setCorrect(undefined)
      setProgress((newQuestionIndex / question_set.length) * 100)
    } else {
      router.push({
        pathname: "/result",
        query: {
          category: category,
          totalCorrect: totalCorrect,
          totalQuestion: question_set.length,
        },
      })
    }
  }

  useEffect(() => {
    const uri = `${apiRoutes.getQuestion}?category=${category}&condition=approved`
    if (category) {
      fetch(uri)
        .then((response) => response.json())
        .then((data) => {
          setIsloading(false)
          if (data.length > 0) {
            setQUestion_set(data)
            setTitle(data[0].title)
            setOptions(data[0].options)
            setcorrectAnswerIndex(data[0].correctAnswerIndex)
          }
        })
    }
  }, [category])

  return isLoading === true ? (
    <Loading />
  ) : (
    <Box>
      <Head>
        <title>Quez of {category}</title>
      </Head>
      <Box bg="primary" p={4} borderRadius="md">
        <Center mb={2} fontSize={18} fontWeight={600}>
          Category: {category}
        </Center>
        <Progress hasStripe value={progress} />
        <Center mt={2} bg="warning" borderRadius="md">
          Correct answer {totalCorrect}/{question_set?.length}
        </Center>
      </Box>
      {question_set?.length > 0 && (
        <Quez_component
          question={title}
          options={options}
          correct={correct}
          correctAnswerIndex={correctAnswerIndex}
          checkAnswer={checkAnswer}
          nextQuestion={nextQuestion}
          questionIndex={questionIndex}
        />
      )}
    </Box>
  )
}
