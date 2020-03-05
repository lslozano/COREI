import React from 'react'
import { 
  Box,
  Stack,
  Heading,
  Flex
} from '@chakra-ui/core'

function NotFound() {

  return (
    <Flex
      mt="10vh"
      w="100vw"
      h="90vh"
      align="center"
      justify="center"
    >
      <Box>
        <Stack 
          spacing={8} 
          p={8}
        >
          <Heading 
            textAlign="center"
            as="h1"
          >
            Esta no es la página que estás buscando.
          </Heading>
        </Stack>
      </Box>
    </Flex>
  )

}

export default NotFound;
