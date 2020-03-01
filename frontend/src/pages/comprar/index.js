import React, { useEffect, useContext } from 'react'
import {
  Stack,
  Heading,
  Box,
  Flex
} from '@chakra-ui/core'
import { MyContext } from '../../context'

function Comprar({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  return (
    <MyContext.Consumer>
      {context => {
        return (
        <React.Fragment>
          <Stack
            mt="15vh"
            ml="5vw"
            mr="5vw"
            backgroundColor="white"
            textAlign="center"
            w="90vw"
          >
          <Flex>
            <Box>
              <Heading mb={1} size="sm">Bienes inmuebles disponibles en compra:</Heading>
            </Box>
          </Flex>
        </Stack>
      </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
}

export default Comprar