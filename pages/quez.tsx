import { Box } from "@chakra-ui/react"
import { useState } from "react"
import Categories from "../components/Categories"

export default function Quez() {
  const [category, setCategory] = useState(null)
  return category === null ? (
    <Categories setCategory={setCategory} />
  ) : (
    <Box></Box>
  )
}
