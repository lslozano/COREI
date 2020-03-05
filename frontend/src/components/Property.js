import React, { useContext } from 'react'
import { Stack, Box, Text, Image, Badge, Flex, Avatar } from '@chakra-ui/core'
import { MyContext } from '../context'

function Property({ property }) {

  const context = useContext(MyContext)
  const { loggedUser } = context.state

  return (
    <Stack
      boxShadow="lg"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg="white"
      spacing={5}
      p={3}
    >
      <Image src={property.photoURL} alt={property.name} />
      <Flex>
        <Avatar name={property.author.name} src={propoerty.author.photoURL} />
        <Box ml="3">
          <Text textAlign="left" fontWeight="bold">
            @
            {loggedUser && property.author.name === loggedUser.name
              ? 'Me'
              : property.author.name}
          </Text>
          <Text fontSize="sm">Publicado:{property.createdAt}</Text>
        </Box>
      </Flex>
    </Stack>
  )
  
}

export default Property