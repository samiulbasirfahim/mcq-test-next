import { Card, CardBody, Stack, Image, Grid, Box } from "@chakra-ui/react"
import HeadingC from "./Heading"

export default function Categories({ setCategory }: any) {
  const categories = [
    {
      id: 1,
      name: "Science",
      imageLink:
        "https://img.freepik.com/free-vector/flat-science-illustration-biotechnology-concept_23-2148891611.jpg?w=740&t=st=1670937648~exp=1670938248~hmac=9b891916434d36205b40e8c06dd3069c2b2cfaf59390902aeebec2d9bb47f40d",
    },
    {
      id: 2,
      name: "Science",
      imageLink:
        "https://img.freepik.com/free-vector/flat-science-illustration-biotechnology-concept_23-2148891611.jpg?w=740&t=st=1670937648~exp=1670938248~hmac=9b891916434d36205b40e8c06dd3069c2b2cfaf59390902aeebec2d9bb47f40d",
    },
    {
      id: 1,
      name: "Science",
      imageLink:
        "https://img.freepik.com/free-vector/flat-science-illustration-biotechnology-concept_23-2148891611.jpg?w=740&t=st=1670937648~exp=1670938248~hmac=9b891916434d36205b40e8c06dd3069c2b2cfaf59390902aeebec2d9bb47f40d",
    },
    {
      id: 1,
      name: "Science",
      imageLink:
        "https://img.freepik.com/free-vector/flat-science-illustration-biotechnology-concept_23-2148891611.jpg?w=740&t=st=1670937648~exp=1670938248~hmac=9b891916434d36205b40e8c06dd3069c2b2cfaf59390902aeebec2d9bb47f40d",
    },
    {
      id: 1,
      name: "Science",
      imageLink:
        "https://img.freepik.com/free-vector/flat-science-illustration-biotechnology-concept_23-2148891611.jpg?w=740&t=st=1670937648~exp=1670938248~hmac=9b891916434d36205b40e8c06dd3069c2b2cfaf59390902aeebec2d9bb47f40d",
    },
    {
      id: 2,
      name: "English",
      imageLink:
        "https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg?w=740&t=st=1670937877~exp=1670938477~hmac=74f532fa76b90a8952b421e073076445ddb4047f6ac9bd3e8131fee52d799666",
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
              onClick={() => setCategory(category.id)}
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
                    {category.name}
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
