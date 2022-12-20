import { Container } from "@chakra-ui/react"

export default function Loading() {
  return (
    <Container className="loading_div">
      <div className="loading">
        <div className="circle first"></div>
        <div className="circle second"></div>
        <div className="circle third"></div>
        <p className="text-p">Loading...</p>
      </div>
    </Container>
  )
}
