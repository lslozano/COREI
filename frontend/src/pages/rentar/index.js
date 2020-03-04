import React, { useEffect, useContext, useState } from 'react'
import {
  Stack,
  Heading,
  Box,
  Flex
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import AUTH_SERVICE from '../../services/auth'

function Rentar({ history }) {
  const context = useContext(MyContext)
  const [realstate, setRealState] = useState({})

  const allProperties = () => {
    let properties
    AUTH_SERVICE.getAllProperties()
    .then(res => {
      properties=res
      setRealState({properties})
      console.log(realstate)
    })
    .catch(err => console.log(err))
  }
  useEffect( () => {
    if (!context.state.isLogged) return history.push('/login')
    allProperties()
  }, [Object.entries(realstate).length])

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
              <Heading mb={1} size="sm">Bienes inmuebles disponibles en renta:</Heading>
          </Box>
          </Flex>
        </Stack>
      </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
}

export default Rentar
