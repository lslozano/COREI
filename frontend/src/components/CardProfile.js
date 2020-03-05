import React from 'react'
import { Stack, Heading, Box, Image } from '@chakra-ui/core'

function CardProfile({ user, history }) {

  return (
    <Box
      p={5}
      w="100vw"
      mt="10vh"
    >
      <Stack spacing={1}>
        <Image
          rounded="full"
          backgroundColor="#000"
          size="150px"
          src={user.photoURL}
          alt={user.name}
        />
        <Heading>Te damos la bienvenida {user.name}!</Heading>
      </Stack>
    </Box>
  )
  
}

export default CardProfile