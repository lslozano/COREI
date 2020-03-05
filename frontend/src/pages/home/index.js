import React from 'react'
import {
  Stack,
  Heading,
  Box,
  Button,
  Text,
  Flex,
  Image
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import { Link } from 'react-router-dom'


function Home({ history }) {

  const go = path => history.push(path)

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
          <Flex
            justify="center"
            align="center"
          >
            <Box>
              <Heading mb={1} size="sm">Publicita y encuentra inmuebles en renta o venta sin intermediarios.</Heading>
              {!context.state.isLogged && (
              <Button size="sm" color="white" backgroundColor="#000" mt="24px" onClick={() => go('/signup')}>
                Comenzar
              </Button>
              )}
              {context.state.isLogged && (
              <Button size="sm" color="white" backgroundColor="#000" mt="24px" onClick={() => go('/profile')}>
                Comenzar
              </Button>
              )}
            </Box>
          </Flex>
        </Stack>
        <Box>
          <Heading mt="5vh" ml="5vw" size="sm">En que te podemos ayudar?</Heading>
        </Box>
          {!context.state.isLogged && (
            <>
              <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw" align="center">
                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                  <Heading fontSize="md" as={Link} to='/login'>Rentar</Heading>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                  <Heading fontSize="md" as={Link} to='/login'>Comprar</Heading>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                  <Heading fontSize="md" as={Link} to='/login'>Publicitar</Heading>
                </Box>
              </Stack>
            </>
          )}
          {context.state.isLogged && (
            <>
              <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw" align="center">
                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                  <Heading fontSize="md" as={Link} to='/rentar'>Rentar</Heading>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                  <Heading fontSize="md" as={Link} to='/comprar'>Comprar</Heading>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                  <Heading fontSize="md" as={Link} to='/publicar'>Publicitar</Heading>
                </Box>
              </Stack>
            </>
          )}
          <Stack
            ml="5vw"
            mr="5vw"
            backgroundColor="white"
            textAlign="center"
            w="90vw"
          >
            <Box mt="4vh">
              <Image
                rounded="full"
                ml="41vw"
                size="100px"
                src="https://laopinionla.files.wordpress.com/2019/04/shutterstock_140098609.jpg?quality=60&strip=all&w=1200.jpg"
                alt="Casa"
              />
              <Heading mt="4vh" fontSize="xl">Que es COREI?</Heading>
            </Box>
            <Box>
              <Text 
                mt="3vh"
                color="#2D3748"
              >Es una plataforma para publicitar o encontrar bienes inmuebles en renta o venta.</Text>
            </Box>
            <Box mt="4vh">
              <Image
                rounded="full"
                ml="41vw"
                size="115px"
                src="https://www.liderdelemprendimiento.com/wp-content/uploads/2019/07/Comprar-o-rentar-vivienda-en-M%C3%A9xico-3000x1982.png"
                alt="RentaVenta"
              />
              <Heading mt="4vh" fontSize="xl">Como funciona?</Heading>
            </Box>
            <Box>
              <Text 
                mt="3vh"
                color="#2D3748"
              >Puedes elegir entre publicar inmuebles para renta y/o venta o buscar entre el catalógo para rentar y/o comprar. </Text>
            </Box>
            <Box mt="4vh">
              <Image
                rounded="full"
                ml="41vw"
                size="100px"
                src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2163/files/2019/10/handshake.jpeg"
                alt="TratoDirecto"
              />
              <Heading mt="4vh" fontSize="xl">Trato directo</Heading>
            </Box>
            <Box>
              <Text 
                mt="3vh"
                mb="3vh"
                color="#2D3748"
              >Podrás entrar en contacto directo con la persona que publicitó el inmueble.</Text>
            </Box>
          </Stack>
        </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
  
}

export default Home

