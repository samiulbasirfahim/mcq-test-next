import { Card, CardBody, Stack, Image, Grid, Box } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import HeadingC from "../../components/Heading"
import Loading from "../../components/Loading"
import apiRoutes from "../../utilities/apiRoutes"

export default function Categories() {
  const router = useRouter()
  const [categories, setCategories] = useState<any>()
  const [isLoading, setIsloading] = useState(true)

  const setCategory = (name: string) => {
    router.push("/quez/" + name)
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
    <Box px="4" py={8}>
      <Head>
        <title>Choose category</title>
      </Head>
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
