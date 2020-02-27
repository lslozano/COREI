import React from 'react'
//import React, { useContext } from 'react'

import {
  Stack,
  Heading,
  //Image,
  Box,
  //Input,
  Button,
  Text,
  Flex,
  Image
  //SimpleGrid
} from '@chakra-ui/core'
//import { MyContext } from '../../context'
function Home({ history }) {
  const go = path => history.push(path)
  //const context = useContext(MyContext)
  //const { feed } = context.state
  return (
    <React.Fragment>
    <Stack
      mt="15vh"
      ml="5vw"
      mr="5vw"
      minH="90vh"
      backgroundColor="white"
      textAlign="center"
      w="90vw"
    >
    <Flex>
      <Box>
        <Heading mb={1} size="sm">Publicita y encuentra inmuebles en renta o venta sin intermediarios.</Heading>
        <Button size="sm" color="white" backgroundColor="#000" mt="24px" onClick={() => go('/signup')}>
          Comenzar
        </Button>
      </Box>
      </Flex>
    <Box mt="4vh">
      <Image
        rounded="full"
        ml="32vw"
        size="100px"
        src="https://laopinionla.files.wordpress.com/2019/04/shutterstock_140098609.jpg?quality=60&strip=all&w=1200.jpg"
        alt="Casa"
      />
      <Heading 
        mt="4vh"
        fontSize="xl"
      >Que es COREI?</Heading>
    </Box>
    <Box>
      <Text 
        mt="3vh"
      >Es una plataforma para publicitar o encontrar bienes inmuebles en renta o venta.</Text>
    </Box>
    <Box mt="4vh">
      <Image
        rounded="full"
        ml="30vw"
        size="115px"
        src="https://www.liderdelemprendimiento.com/wp-content/uploads/2019/07/Comprar-o-rentar-vivienda-en-M%C3%A9xico-3000x1982.png"
        alt="RentaVenta"
      />
      <Heading 
        mt="4vh"
        fontSize="xl"
      >Como funciona?</Heading>
    </Box>
    <Box>
      <Text 
        mt="3vh"
      >Puedes elegir entre publicar inmuebles para renta y/o venta o buscar entre el catalógo para rentar y/o comprar. </Text>
    </Box>
    <Box mt="4vh">
      <Image
        rounded="full"
        ml="30vw"
        size="100px"
        src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2163/files/2019/10/handshake.jpeg"
        alt="TratoDirecto"
      />
      <Heading 
        mt="4vh"
        fontSize="xl"
      >Trato directo</Heading>
    </Box>
    <Box>
      <Text 
        mt="3vh"
      >No. Podrás entrar en contacto directo con la persona propietaria del inmueble.</Text>
    </Box>
    </Stack>
    </React.Fragment>
  )
}

export default Home