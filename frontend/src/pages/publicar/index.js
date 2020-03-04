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
  useToast,
  Select
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
    e.preventDefault()
    context
      .handlePublicarSubmit(e)
      .then(response => {
        toast({
          title: 'Publicación realizada.',
          description: "Tu inmueble ha quedado debidamente publicado..",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/profile')
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
              <Select 
                onChange={context.handlePublicarInput}
                placeholder="Selecciona Renta o Venta"
                name="type">
                  <option value="Renta">Renta</option>
                  <option value="Venta">Venta</option>
              </Select>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    placeholder="Descripcion"
                    name="description"
                    type="text"
                    defaultValue={context.state.formPublicar.description}
                    onChange={context.handlePublicarInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    placeholder="Dirección"
                    name="direction"
                    type="text"
                    defaultValue={context.state.formPublicar.direction}
                    onChange={context.handlePublicarInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    placeholder="Precio"
                    name="price"
                    type="text"
                    defaultValue={context.state.formPublicar.price}
                    onChange={context.handlePublicarInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                    <Input
                      placeholder="Imagen"
                      name="imageURL"
                      type="file"
                      defaultValue={context.state.formPublicar.imageURL}
                      onChange={context.handlePublicarInput}
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




