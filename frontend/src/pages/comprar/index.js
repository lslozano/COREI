import React, { useEffect, useContext } from 'react'
import {
  Stack,
  Heading,
  Box,
  Flex,
  Image,
  Badge,
  SimpleGrid
} from '@chakra-ui/core'
import { MyContext } from '../../context'

function Comprar({ history }) {
  
  const context = useContext(MyContext)

  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  
  })

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
            h="90vh"
          >

          <Heading mb={1} size="sm">Bienes inmuebles disponibles en compra:</Heading>

          <Flex>

            <SimpleGrid
              columns={[1, 2, 3]}
              spacing={10}
              ml="5vw"
              mr="5vw"
            >
              {context.state.properties.map(property => 
                property.type === "Venta" && (

              <Box 
                key={property._id} 
                maxW="sm" 
                borderWidth="1px" 
                rounded="lg" 
                overflow="hidden" 
                mt="5vh"
                mr="5vw" 
                mb="5vh"
                ml="5vw"
              >

                <Image src={property.imageURL} alt={property.type} />

                <Box p="6" >

                  <Box d="flex" alignItems="baseline">

                    <Badge rounded="full" px="2" variantColor="teal">
                      New
                    </Badge>

                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.type}
                    </Box>

                  </Box>

                  <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {property.description}
                    </Box>

                  <Box
                      mt="1"
                      as="h5"
                      lineHeight="tight"
                      isTruncated
                    >
                      {property.direction}
                  </Box>

                  <Box>
                    {property.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                       / M.N.
                    </Box>
                  </Box>

                  <Box
                      mt="1"
                      as="h5"
                      lineHeight="tight"
                      isTruncated
                    >
                      {property.owner.name}
                  </Box>

                </Box>
              </Box>
              ))}
            </SimpleGrid>
          </Flex>
        </Stack>
      </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
}

export default Comprar
