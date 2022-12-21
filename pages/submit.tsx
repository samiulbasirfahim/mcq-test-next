import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import Loading from "../components/Loading"
import apiRoutes from "../utilities/apiRoutes"

export default function Submit() {
  const [value, setValue] = useState("")
  const router = useRouter()
  const [categories, setCategories] = useState<any>()
  const [isLoading, setIsloading] = useState(true)
  const toast = useToast()
  const toastIdRef = useRef<any>()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const userFromLocal: any = localStorage.getItem("user")
    const user = JSON.parse(userFromLocal)
    const question = {
      title: e.target.title.value,
      option1: e.target.option1.value,
      option2: e.target.option2.value,
      option3: e.target.option3.value,
      option4: e.target.option4.value,
      correctAnswerIndex: value,
      category: e.target.category.value,
    }
    if (
      user._id &&
      question.title &&
      question.option1 &&
      question.option2 &&
      question.option3 &&
      question.option4 &&
      question.correctAnswerIndex &&
      question.category
    ) {
      const finalQuestion = {
        title: question.title,
        options: [
          question.option1,
          question.option2,
          question.option3,
          question.option4,
        ],
        category: question.category,
        correctAnswerIndex: value,
        addedBy: user._id,
      }

      fetch(apiRoutes.createQuestion, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalQuestion),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data._id) {
            toastIdRef.current = toast({
              description: "Question submited succesfully",
              duration: 1000,
            })
            router.push("/")
          } else {
            toastIdRef.current = toast({
              description: "Something wrong, Can't submit quesiton",
              duration: 1000,
            })
          }
        })
    }
  }

  useEffect(() => {
    fetch(apiRoutes.getCategory, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
        setIsloading(false)
      })
  }, [])

  return isLoading === true ? (
    <Loading />
  ) : (
    <Flex px="4" py="8" justify={"center"}>
      <Head>
        <title>Submit quez</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <FormLabel>Title</FormLabel>
        <Input
          borderColor="secondary"
          type="text"
          name="title"
          required={true}
        />
        <Divider my={5} />
        <FormLabel>Option 1</FormLabel>
        <Input
          borderColor="secondary"
          type="text"
          name="option1"
          required={true}
        />
        <FormLabel>Option 2</FormLabel>
        <Input
          borderColor="secondary"
          type="text"
          name="option2"
          required={true}
        />
        <FormLabel>Option 3</FormLabel>
        <Input
          borderColor="secondary"
          type="text"
          name="option3"
          required={true}
        />
        <FormLabel>Option 4</FormLabel>
        <Input
          borderColor="secondary"
          type="text"
          name="option4"
          required={true}
        />
        <Box
          my={6}
          border={"1px"}
          p={2}
          borderRadius={5}
          borderColor="secondary"
        >
          <FormLabel>Correct Option</FormLabel>
          <RadioGroup aria-required={true} onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="0">First</Radio>
              <Radio value="1">Second</Radio>
              <Radio value="2">Third</Radio>
              <Radio value="3">Fourth</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <FormLabel>Category</FormLabel>
        <Select placeholder="Select category" name="category" required={true}>
          {categories.map((category: any) => {
            return <option key={category.title}>{category.title}</option>
          })}
        </Select>
        <Input mt="5" bg="primary" type="submit" value="Submit" />
      </form>
    </Flex>
  )
}
