import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import CardProfile from '../../components/CardProfile'
import { 
  Flex,
  Box,
  Heading,
  Stack
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'

export default function Profile({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged, loggedUser } = context.state
        if (isLogged)
          return (
            <React.Fragment>
              <Flex
                w="100vw"
                minH="100vh"
                flexWrap="wrap"
                mt="3vh"
                direction="column"
                align="center"
              >
                <CardProfile user={loggedUser} history={history} />
                <Box>
                  <Heading mt="5vh">Que deseas hacer hoy?</Heading>
                  <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw">
                    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" as={Link} to='/rentar'>
                      <Heading fontSize="md">Rentar</Heading>
                    </Box>
                    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" as={Link} to='/comprar'>
                      <Heading fontSize="md">Comprar</Heading>
                    </Box>
                    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" as={Link} to='/publicar'>
                      <Heading fontSize="md">Publicitar</Heading>
                    </Box>
                  </Stack>
                </Box>
              </Flex>
            </React.Fragment>
          )
        else return <>Loading...</>
      }}
    </MyContext.Consumer>
  )
}