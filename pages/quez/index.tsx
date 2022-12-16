import { Card, CardBody, Stack, Image, Grid, Box } from "@chakra-ui/react"
import { useRouter } from "next/router"
import HeadingC from "../../components/Heading"

export default function Categories({ response: categories }: any) {
  const router = useRouter()
  console.log(categories)
  const setCategory = (name: string) => {
    router.push("/quez/" + name)
  }

  return (
    <Box px="4" py={8}>
      <HeadingC>Choose category</HeadingC>
      <Grid templateColumns="repeat(2, 1fr)" gap="5">
        {categories.map((category: any) => {
          return (
            <Card
              key={category._id}
              onClick={() => setCategory(category.title)}
              maxW="sm"
              boxShadow="sm"
              shadow="outline"
              align="center"
            >
              <CardBody>
                <Image
                  src={category.imageUri}
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
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/category/get", {
    method: "GET",
  }).then((response) => response.json())

  return {
    props: {
      response,
    },
  }
}
