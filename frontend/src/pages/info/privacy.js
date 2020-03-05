import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Box,
  Stack,
  Heading,
  Text,
  Button
} from '@chakra-ui/core'

function Privacy() {

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
        <Heading ml="5vw" mt="3vh" fontSize="xl">Aviso de Privacidad</Heading>
      </Box>
      <Box>
        <Text ml="5vw" mt="1vh" color="#2D3748">
          En cumplimiento a la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, ponemos a su disposición el presente Aviso de Privacidad, mediante el cual hacemos de su conocimiento los datos personales que recabamos de usted, el uso y manejo que se les da.
        </Text>
        <Heading mt="3vh" ml="5vw" fontSize="md">Qué datos personales recabamos de usted?</Heading>
        <Text mt="3vh" ml="5vw" color="#2D3748">
          Su nombre completo y correo electrónico para realizar el registro de usuario y que sea posible realizar el enlace entre los usuarios interesados en los bienes inmuebles ofertados. De igual manera se recaba información sobre los bienes inmuebles
          que deseas publicitar.
        </Text>
        <Heading mt="3vh" ml="5vw" fontSize="md">Para qué usamos los datos que recabamos de usted?</Heading>
        <Text mt="3vh" ml="5vw" color="#2D3748">
          Para contar debidamente con el registro de usuario y poder realizar un enlace entre las personas que usan el sitio de manera más confiable.
        </Text>
        <Heading mt="3vh" ml="5vw" fontSize="md">Con quién compartimos su información y para qué fines?</Heading>
        <Text mt="3vh" ml="5vw" color="#2D3748">
          La información que se proporciona a COREI es compartida con los usuarios que desean ponerse en contacto para poder llegar a un acuerdo sobre la renta/venta/compra (según aplique) de un inmueble.
        </Text>
        <Heading mt="3vh" ml="5vw" fontSize="md">Cómo puede limitar el uso de su información, acceder rectificar o eliminar la información proporcionada?</Heading>
        <Text mt="3vh" ml="5vw" color="#2D3748">
          Si desea eliminar su cuenta, basta con seleccionar la opción que hemos puesto a la disposición en la misma sección de configuración de cuenta y esta quedara eliminada de manera inmediata.
        </Text>
        <Heading mt="3vh" ml="5vw" fontSize="md">Como conocer los cambios al presente aviso de privacidad?</Heading>
        <Text mt="3vh" ml="5vw" color="#2D3748">
          Cualquier cambio y/o actualización al presente aviso será publicado en nuestra plataforma en su sección correspondiente.
        </Text>
        <Heading mt="3vh" ml="5vw" fontSize="md">Como contactarnos?</Heading>
        <Text mt="3vh" ml="5vw" color="#2D3748">
        En caso de duda, puede enviar correo electrónico a la cuenta: lslozano11@gmail.com
        </Text>
        <Button mb="5vh" ml="5vw" size="sm" color="white" backgroundColor="#000" mt="24px" as={Link} to="/">
          Página principal
        </Button>
      </Box>
    </Stack>
  )
  
}

export default Privacy