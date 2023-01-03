import {
  Box,
  Button,
  Collapse,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import HeadingC from "../../components/Heading"
import Loading from "../../components/Loading"
import apiRoutes from "../../styles/utilities/apiRoutes"

export default function Categories() {
  const [categories, setCategories] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)
  const { isOpen, onToggle } = useDisclosure()
  const [error, setError] = useState("")
  useEffect(() => {
    fetch(apiRoutes.getCategory)
      .then((res) => res.json())
      .then((res) => {
        setCategories(res)
        setIsLoading(false)
      })
  }, [])

  async function handleSubmit(e: any) {
    e.preventDefault()
    const info = {
      title: e.target.title.value,
      imageUri: e.target.image_url.value,
    }
    fetch(apiRoutes.creataeCategory, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res._id) {
          setCategories([...categories, res])
          e.target.reset()
          onToggle()
          setError("")
        } else {
          setError(res.message)
        }
      })
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box px="4" py="8">
      <HeadingC>Categories</HeadingC>
      <Text mb="2" textAlign="center">
        total categories: {categories.length}
      </Text>
      <Grid gap="5" templateColumns="repeat(1, 1fr)">
        {categories.map((category: any) => (
          <Text
            bg="secondary"
            p="2"
            rounded="md"
            textAlign="center"
            fontWeight="bold"
            fontSize="md"
          >
            {category.title}
          </Text>
        ))}
      </Grid>
      <Box mt="6">
        {!isOpen && (
          <Button onClick={onToggle} bg="primary" w="full" mt="4">
            Add category
          </Button>
        )}
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="4"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <form onSubmit={handleSubmit}>
              {error && (
                <Text bg="red" p="2" textAlign="center">
                  {error}
                </Text>
              )}
              <InputGroup mb="2">
                <InputLeftAddon children="title" />
                <Input name="title" type="text" placeholder="title" />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="image" />
                <Input name="image_url" type="text" placeholder="Image url" />
              </InputGroup>
              {isOpen && (
                <Flex gap="4">
                  <Input
                    type="submit"
                    value="Submit"
                    bg="primary"
                    w="full"
                    mt="4"
                  />
                  <Button onClick={onToggle} bg="primary" w="full" mt="4">
                    Cancel
                  </Button>
                </Flex>
              )}
            </form>
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}
