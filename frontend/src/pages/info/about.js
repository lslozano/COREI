import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Box,
  Stack,
  Heading,
  Text,
  Button
} from '@chakra-ui/core'

function About() {

  return (
    <Stack
      mt="15vh"
      ml="5vw"
      mr="5vw"
      minH="100vh"
      backgroundColor="white"
      w="90vw"
    >
      <Box>
        <Heading ml="5vw" mt="3vh" fontSize="xl">Acerca de</Heading>
      </Box>
      <Box>
        <Text ml="5vw" mt="1vh" color="#2D3748">
          Acerca de
          COREI es una plataforma que tiene como objetivo ser un espacio publicitario dedicado a bienes inmuebles. Es decir, aquí podrás
          anunciar algúna propiedad o propiedades que quieras poner en renta o vender. Por el contrario, lo que estás buscando es rentar un
          departamento o comprar un inmueble, podrás buscar entre todos los inmuebles que han sido publicados en la categoría de tú interés.
        </Text>
        <Button mt="24px" ml="5vw" size="sm" color="white" backgroundColor="#000" as={Link} to="/">
          Página principal
        </Button>
      </Box>
    </Stack>
  )
  
}

export default About