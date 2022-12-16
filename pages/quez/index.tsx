import { Card, CardBody, Stack, Image, Grid, Box } from "@chakra-ui/react"
import { useRouter } from "next/router"
import HeadingC from "../../components/Heading"

export default function Categories() {
  const router = useRouter()

  const setCategory = (name: string) => {
    router.push("/quez/" + name)
  }

  const categories = [
    {
      id: 1,
      title: "science",
      imageLink:
        "https://img.freepik.com/free-vector/flat-science-illustration-biotechnology-concept_23-2148891611.jpg?w=740&t=st=1670937648~exp=1670938248~hmac=9b891916434d36205b40e8c06dd3069c2b2cfaf59390902aeebec2d9bb47f40d",
    },
    {
      id: 2,
      title: "english",
      imageLink:
        "https://img.freepik.com/free-vector/flat-science-illustration-biotechnology-concept_23-2148891611.jpg?w=740&t=st=1670937648~exp=1670938248~hmac=9b891916434d36205b40e8c06dd3069c2b2cfaf59390902aeebec2d9bb47f40d",
    },
  ]

  return (
    <Box px="4" py={8}>
      <HeadingC>Choose category</HeadingC>
      <Grid templateColumns="repeat(2, 1fr)" gap="5">
        {categories.map((category) => {
          return (
            <Card
              key={category.id}
              onClick={() => setCategory(category.title)}
              maxW="sm"
              boxShadow="sm"
              shadow="outline"
              align="center"
            >
              <CardBody>
                <Image
                  src={category.imageLink}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width={80}
                />
                <Stack mt="1">
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {category.title}
                  </p>
                </Stack>
              </CardBody>
            </Card>
          )
        })}
      </Grid>
    </Box>
  )
}
