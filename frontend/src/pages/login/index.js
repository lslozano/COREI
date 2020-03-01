import React, { useContext } from 'react'
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon,
  useToast,
  Text
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'

export default function Login({ history }) {
  const toast = useToast()
  const context = useContext(MyContext)
  const submit = async e => {
    const { user, msg } = await context.handleLoginSubmit(e)
    if (user) {
      history.push('/profile')
    } else {
      toast({
        title: 'Favor de ingresar las credenciales correctamente.',
        description: msg,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            mt="10vh"
            backgroundColor="softpink.100"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
            direction="column"
          >
            <Form submit={submit} bgColor="white" title="Inicia sesión">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="email" />} />
                  <Input
                    onChange={context.handleLoginInput}
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={context.state.formLogin.email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="lock" />} />
                  <Input
                    onChange={context.handleLoginInput}
                    placeholder="Contraseña"
                    name="password"
                    type="password"
                    value={context.state.formLogin.password}
                  />
                </InputGroup>
              </FormControl>
            </Form>
            <Text mt="5vh" as={Link} to="/signup">Aún no tienes cuenta? Registrate aquí.</Text>
          </Flex>
        )
      }}
    </MyContext.Consumer>
  )
}