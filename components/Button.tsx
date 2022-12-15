import { Button } from "@chakra-ui/react"

export default function Buttonc({ children, onClick, mt }: any) {
  return (
    <Button mt={mt} onClick={onClick} bg="primary">
      {children}
    </Button>
  )
}
