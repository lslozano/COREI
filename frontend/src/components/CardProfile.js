import React from 'react'
import { Stack, Heading, Box, Image } from '@chakra-ui/core'

export default function CardProfile({ user, history }) {
  return (
    <Box
      p={5}
      w="100vw"
      mt="10vh"
    >
      <Stack spacing={1}>
        <Heading>Te damos la bienvenida {user.name}!</Heading>
        <Image
          rounded="full"
          backgroundColor="#000"
          size="150px"
          src={user.photoURL}
          alt={user.name}
        />
      </Stack>

    </Box>
  )
}