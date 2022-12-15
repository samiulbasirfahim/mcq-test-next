import { Box, Center, Progress } from "@chakra-ui/react"
import { useState } from "react"
import Categories from "../components/Categories"
import Quez_component from "../components/Quez"

export default function Quez() {
  const [category, setCategory] = useState(null)
  const [question_set, setQuestion_Set] = useState([
    {
      question: "question1",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 2,
    },
    {
      question: "question2",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 1,
    },
    {
      question: "question3",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 3,
    },
    {
      question: "question4",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 0,
    },
    {
      question: "question5",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 2,
    },
    {
      question: "question6",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 1,
    },
    {
      question: "question7",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 0,
    },
    {
      question: "question8",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 3,
    },
    {
      question: "question9",
      options: [
        "hello worlds1",
        "hello worlds2",
        "hello worlds3",
        "hello worlds4",
      ],
      correctIndex: 1,
    },
  ])
  const [correct, setCorrect] = useState<boolean | undefined>(undefined)
  const [progress, setProgress] = useState<number>(90)
  const [correctIndex, setCorrectIndex] = useState<number>(2)
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [question, setQuestion] = useState<string | number | undefined>(
    question_set[0].question
  )
  const [options, setOptions] = useState<[string] | undefined | any>(
    question_set[0].options
  )

  function checkAnswer(index: number) {
    if (index === correctIndex) {
      setCorrect(true)
    } else {
      setCorrect(false)
    }
  }

  function nextQuestion(question_index: number) {
    const newQuestionIndex = question_index + 1
    const newQuestion = {
      questionIndex: newQuestionIndex,
      options: question_set[newQuestionIndex].options,
      question: question_set[newQuestionIndex].question,
      correctIndex: question_set[newQuestionIndex].correctIndex,
    }

    setOptions(newQuestion.options)
    setQuestion(newQuestion.question)
    setCorrectIndex(newQuestion.correctIndex)
    setQuestionIndex(newQuestion.questionIndex)
    setCorrect(undefined)
  }

  return category === null ? (
    <Categories setCategory={setCategory} />
  ) : (
    <Box>
      <Box bg="primary" p={4} borderRadius="md">
        <Center mb={2} fontSize={18} fontWeight={600}>
          Category: Science
        </Center>
        <Progress hasStripe value={progress} />
        <Center mt={2} bg="warning" borderRadius="md">
          Correct answer 6/10
        </Center>
      </Box>
      <Quez_component
        question={question}
        options={options}
        correct={correct}
        correctIndex={correctIndex}
        checkAnswer={checkAnswer}
        nextQuestion={nextQuestion}
        questionIndex={questionIndex}
      />
    </Box>
  )
}
