import { Box, useColorModeValue } from "@chakra-ui/react"
import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { Tools } from "./components/tools"

function App() {

  return (
    <Box 
      bgGradient={
        useColorModeValue(
          'linear(to-bl, green.200 5%, #191919 75%)', 
          'linear(to-bl, #F3F8FF 5%, #416D19 75%)')
      }
      minH={"100vh"}
    >
      <Navbar />
      <Hero />
      <Tools />
    </Box>
  )
}

export default App
