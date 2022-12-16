import { Box, Center, Progress } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Quez_component from "../../components/Quez"

export default function Quez({ response: question_set }: any) {
  const [correct, setCorrect] = useState<boolean | undefined>(undefined)
  const [correctAnswerIndex, setcorrectAnswerIndex] = useState<number>(
    question_set[0].correctAnswerIndex
  )
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [title, setTitle] = useState<string | number | undefined>(
    question_set[0].title
  )

  const [totalCorrect, setTotalCorrect] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)

  const [options, setOptions] = useState<[string] | undefined | any>(
    question_set[0].options
  )

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
    }
  }

  useEffect(() => {
    setTitle(question_set[0].title)
    setOptions(question_set[0].options)
    console.log(question_set)
    setcorrectAnswerIndex(question_set[0].correctAnswerIndex)
  }, [question_set])

  return (
    <Box>
      <Box bg="primary" p={4} borderRadius="md">
        <Center mb={2} fontSize={18} fontWeight={600}>
          Category:
        </Center>
        <Progress hasStripe value={progress} />
        <Center mt={2} bg="warning" borderRadius="md">
          Correct answer {totalCorrect}/{question_set.length}
        </Center>
      </Box>
      {question_set.length > 0 && (
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

export async function getServerSideProps({ params }: any) {
  const category = params.category

  const response = await fetch(
    "http://localhost:3000/api/question/get?category=" + category,
    {
      method: "GET",
    }
  ).then((response) => response.json())

  return {
    props: {
      response,
    },
  }
}
