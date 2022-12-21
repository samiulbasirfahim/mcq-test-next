import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Toast,
  useRadio,
  useToast,
} from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import Loading from "../../components/Loading"
import Question from "../../components/question"
import apiRoutes from "../../utilities/apiRoutes"

export default function Questions() {
  const [questions, setQuestions] = useState<any>()
  const [categories, setCategories] = useState<any>()
  const [questionCondition, setQuestionCondition] = useState("pending")
  const [category, setCategory] = useState<string>("")
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const toast = useToast()
  const toastIdRef = useRef<any>()
  useEffect(() => {
    fetch(apiRoutes.getCategory)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCategories(data)
          setCategory(data[0].title)
        }
      })
  }, [])
  useEffect(() => {
    setIsLoading(true)
    const uri = `${apiRoutes.getQuestion}?category=${category}&condition=${questionCondition}`
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false)
        console.log(data)
        if (data?.status === false) {
          setQuestions([])
          setError(data.message)
        } else if (data?.status !== false) {
          setQuestions(data)
          setError("")
        }
      })
  }, [category, questionCondition])

  function approveQuestion(quesion: any) {
    const newQuestion = {
      ...quesion,
      addedBy: quesion.addedBy._id,
      condition: "approved",
    }
    fetch(apiRoutes.editQuestion, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          const newQuestions = questions.filter(
            (ques: any) => ques._id !== quesion._id
          )
          setQuestions(newQuestions)
          toastIdRef.current = toast({ description: "Approved succesfully" })
        } else {
          toastIdRef.current = toast({
            description: "Something wrong, can't approve",
          })
        }
      })
  }

  function deleteQuestion(id: any) {
    fetch(`${apiRoutes.deleteQuestion}?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          const newQuestions = questions.filter((ques: any) => ques._id !== id)
          setQuestions(newQuestions)
          toastIdRef.current = toast({ description: "Deleted succesfully" })
        } else {
          toastIdRef.current = toast({
            description: "Something wrong, Can't delete",
          })
        }
      })
  }

  useEffect(() => {
    if (questions) {
      if (questions.length == 0) {
        setError("No question found")
      }
    }
  }, [questions])

  return isLoading ? (
    <Loading />
  ) : (
    <Box px={4} py={8}>
      <Stack bg="secondary" rounded="sm" mb="2" py="4">
        <Text textAlign="center">Question Contdition</Text>
        <Flex justifyContent={"center"}>
          <RadioGroup onChange={setQuestionCondition} value={questionCondition}>
            <Stack direction="row">
              <Radio value="approved">Approved</Radio>
              <Radio value="pending">Pending</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </Stack>
      <Stack bg="secondary" rounded="sm" mb="2" py="4">
        <Text textAlign="center">Question category</Text>
        <Select
          defaultValue={category}
          onChange={(e: any) => setCategory(e.target.value)}
        >
          {categories &&
            categories.map((category: any) => (
              <option key={category?.title}>{category?.title}</option>
            ))}
        </Select>
      </Stack>
      {error && (
        <Alert size="sm" py="2" rounded="sm" status="error" bg="warning">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Stack spacing="8">
        {questions.length > 0 &&
          questions.map((question: any) => (
            <Question
              quesion={question}
              key={question._id}
              deleteQuestion={deleteQuestion}
              approveQuestion={approveQuestion}
            />
          ))}
      </Stack>
    </Box>
  )
}
