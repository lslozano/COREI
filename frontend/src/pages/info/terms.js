import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Box,
  Stack,
  Heading,
  Text,
  Button
} from '@chakra-ui/core'

function Terms() {

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
        <Heading ml="5vw" mt="3vh" fontSize="xl">Términos y Condiciones</Heading>
      </Box>
      <Box>
        <Text ml="5vw" mt="1vh" color="#2D3748">
          Bienvenido y gracias por tu interes en COREI, plataforma inmobiliaria que tiene como objetivo dar publicidad únicamente a bienes inmuebles para renta o compra así como el poner en contacto a personas que deseen comprar, rentar o vender. Los siguientes Términos de Servicio son un contrato legal entre usted (ustedes) y COREI concerniente al uso que usted le da a nuestro Servicio. Los visitantes y los usuarios del Servicio son referidos de manera individual como "Usuario" y colectivamente como "Usuarios".
        </Text>
        <Text ml="5vw" mt="2vh" color="#2D3748"> 
          POR FAVOR, LEE CUIDADOSAMENTE LOS SIGUIENTES TERMINOS DE SERVICIO, YA QUE, AL REGISTRARTE EN NUESTRO SITIO, ACCESARLO, BUSCAR EN EL O USARLO, DEJAS DE MANIFIESTO QUE HAS LEIDO, ENTENDIDO Y ESTAS DE ACUERDO A ACATAR LOS SIGUIENTES TERMINOS Y CONDICIONES, ASI COMO EL AVISO DE PRIVACIDAD DE COREI Y CUALQUIER LINEAMIENTO QUE SE DEFINA, COLECTIVAMENTE LLAMADO LOS TERMINOS. TEN EN CUENTA QUE AL ACEPTAR LOS SIGUIENTES TERMINOS Y CONDICIONES, DEJA DE MANIFIESTO QUE USTED SE ACATA A LA LEGISLACION MEXICANA Y RENUNCIA A LA JURISDICCION EN DONDE SE ENCUENTRE, SUJENTANDOSE UNICA Y EXCLUSIVAMENTE A LA JURISDICCION DE LA REPUBLICA MEXICANA, EN ESPECIFICO A LOS TRIBUNALES EXISTENTES EN LA CIUDAD DE MEXICO, EN LOS CUALES SE RESOLVERA CUALQUIER DISPUTA, CONFLICTO O RECLAMO QUE USTED DECIDA REALIZAR EN CONTRA DE COREI.
        </Text>
        <Text ml="5vw" mt="2vh" color="#2D3748">
          Eligibilidad: Cuentas. Nuestra plataforma no se encuentra disponible para los usuarios que previamente hayan sido suspendidos o removidos de nuestro sitio por COREI. La plataforma es para uso exclusivo de personas con capacidad jurídica, por lo que al usarla, dejas de manifiesto que cuentas con plena capacidad y eres una persona mayor de edad.
        </Text>
        <Text ml="5vw" mt="2vh" color="#2D3748">
          Al crear una cuenta, dejas de manifiesto que: 
        </Text>
        <Text ml="5vw" mt="2vh" color="#2D3748">
          I.- Eres una persona mayor de edad y con plena capacidad jurídica y estás de acuerdo con los términos y condiciones o 
        </Text>
        <Text ml="5vw" mt="2vh" color="#2D3748">
          II.- Eres una persona mayor de edad en tú lugar de residencia y estas de acuerdo con los términos y condiciones.
        </Text>
        <Text ml="5vw" mt="2vh" color="#2D3748">
          Cuenta: Para usar ciertas opciones de nuestro Servicio, debes de registrarte con una cuenta. Podrá ser que se te pregunte por una contraseña en conexión con tu cuenta. Usted es el único responsable de mantener la confidencialidad de dicha su cuenta y contraseña y acepta toda la responsabilidad de todas y cada una de las actividades que ocurran bajo su cuenta.
          Toda vez que COREI es solo una plataforma para facilitar la publicidad y contacto entre personas que deseen rentar/comprar/vender, la responsabilidad del usuario es dar un uso légitimo a la cuenta creada, mantener de manera confidencial su usuario, contraseña y correo así como el hecho de que, en dado caso de que el usuario tenga sospecha de que su cuenta no es segura, debido a perdida, robo, acceso no autorizado, acepta que deberá de manera inmediata notificar a COREI a través de lslozano11@gmail.com de este hecho; toda vez que el usuario será responsable de cualquier daño o perjuicio que pueda llegar a sufrir COREI a causa de esta situación.        
        </Text>
        <Text ml="5vw" mt="2vh" color="#2D3748">
          COREI NO ES RESPONSABLE NI TIENE INHERENCIA ALGUNA EN LOS TRATOS, ACUERDOS, ARREGLOS QUE LLEGUEN LAS PERSONAS UNA VEZ QUE SE PONGAN EN CONTACTO CON RESPDECTO A LA COMPRA/RENTA/VENTA DE LOS BIENES INMUBELES ANUNCIADOS EN LA PLATAFORMA. SE REITERA QUE LA PLATAFORMA ES UNICAMENTE PARA PUBLICIDAD Y ESTA ES SOLO UN MEDIO DE CONTACTO.
        </Text>
        <Text ml="5vw" mt="2vh" color="#2D3748">
          COREI SOLO PERMITE LA PUBLICIDAD DE INMUEBLES, SIN EMBARGO, LA RESPONSABILIDAD DE ASEGURARSE Y VERIFICAR QUE QUIEN HAYA PUBLICADO UN INMUEBLE SEA LA PERSONA PROPIETARIA ES DE QUIEN SE PONGA EN CONTACTO CON DICHO USUARIO.
        </Text>
        <Button mt="24px" ml="5vw" mb="5vh" size="sm" color="white" backgroundColor="#000" as={Link} to="/">
          Página principal
        </Button>
      </Box>
    </Stack>
  )
  
}

export default Terms