import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import { 
  Flex,
  Box,
  Heading,
  Stack,
  Text,
  Input,
  Image
} from '@chakra-ui/core'

function Config({ history }) {
  
  const context = useContext(MyContext)

  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })

  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged } = context.state
        if (isLogged)
          return (
            <React.Fragment>
              <Flex
                w="100vw"
                minH="100vh"
                wrap="wrap"
                direction="column"
                align="start"
                mt="5vh"
                ml="5vw"
              >
                <Box>
                  <Heading mt="5vh">Configuración:</Heading>
                  <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw" align="center">
                    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                      <Text fontSize="md">Actualizar foto de perfil.</Text>
                      <Image
                        rounded="full"
                        backgroundColor="#000"
                        size="150px"
                        src={context.state.loggedUser.photoURL}
                        alt={context.state.loggedUser.name} 
                      />
                      <Input type="file" name="photoURL" onChange={context.uploadPhoto} />
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

export default Config
