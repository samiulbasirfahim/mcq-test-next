import { Box } from "@chakra-ui/react"

export default function Loading() {
  return (
    <Box className="loading_div">
      <div className="loading">
        <div className="circle cyan"></div>
        <div className="circle magenta"></div>
        <div className="circle yellow"></div>
        <p className="text-p">Loading...</p>
      </div>
    </Box>
  )
}
