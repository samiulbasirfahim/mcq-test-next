import { Box, Center, Progress } from "@chakra-ui/react"
import { useState } from "react"
import Categories from "../components/Categories"
import Quez_component from "../components/Quez"

export default function Quez() {
  const [category, setCategory] = useState(null)
  const [question_set, setQuestion_Set] = useState([
    {
      title: "Who is the first programmer ?",
      options: ["f1", "hello worlds2", "hello worlds3", "hello worlds4"],
      correctAnswerIndex: 2,
    },
    {
      title: "World first computer name ?",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctAnswerIndex: 1,
    },
    {
      title: "Who is the inventor of computer ?",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctAnswerIndex: 3,
    },
    {
      title: "What is the scientific name of human ?",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctAnswerIndex: 0,
    },
  ])
  const [correct, setCorrect] = useState<boolean | undefined>(undefined)
  const [correctAnswerIndex, setcorrectAnswerIndex] = useState<number>(2)
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
      setcorrectAnswerIndex(newQuestion.correctAnswerIndex)
      setQuestionIndex(newQuestion.questionIndex)
      setCorrect(undefined)
      setProgress((newQuestionIndex / question_set.length) * 100)
    }
  }

  return category === null ? (
    <Categories setCategory={setCategory} />
  ) : (
    <Box>
      <Box bg="primary" p={4} borderRadius="md">
        <Center mb={2} fontSize={18} fontWeight={600}>
          Category: {category}
        </Center>
        <Progress hasStripe value={progress} />
        <Center mt={2} bg="warning" borderRadius="md">
          Correct answer {totalCorrect}/{question_set.length}
        </Center>
      </Box>
      <Quez_component
        question={title}
        options={options}
        correct={correct}
        correctAnswerIndex={correctAnswerIndex}
        checkAnswer={checkAnswer}
        nextQuestion={nextQuestion}
        questionIndex={questionIndex}
      />
    </Box>
  )
}
