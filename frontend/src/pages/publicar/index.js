import React, { useEffect, useContext } from 'react'
import {
  Stack,
  Heading,
  Box,
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon,
  useToast
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import Form from '../../components/Form'


function Publicar({ history }) {
  const toast = useToast()
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  const submit = e => {
    context
      .handleSignupSubmit(e)
      .then(response => {
        toast({
          title: 'Publicación realizada.',
          description: "Tu inmueble ha quedado debidamente publicado..",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/publicar')
      })
      .catch(err => {
        toast({
          title: 'Algo salio mal.',
          description: 'No se ha podido realizar la publicación.',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }
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
              <Heading mb={1} size="sm">Publica un bien inmueble para renta o venta:</Heading>
            </Box>
          </Flex>
        </Stack>
        <Flex
            mt="10vh"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
          >
            <Form submit={submit} bgColor="white" title="Inmueble a publicar">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    placeholder="Renta o Venta"
                    name="Tipo"
                    type="text"
                    //value={context.state.formSignup.name}
                    //onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Precio"
                    name="precio"
                    type="text"
                    //value={context.state.formSignup.email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Ubicación"
                    name="ubicación"
                    type="text"
                    //value={context.state.formSignup.password}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Características"
                    name="características"
                    type="text"
                    //value={context.state.formSignup.password}
                  />
                </InputGroup>
              </FormControl>
            </Form>
          </Flex>
      </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
}

export default Publicar