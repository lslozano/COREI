import React, { useContext, useEffect } from 'react'
import {
  Box,
  Image,
  Badge
} from '@chakra-ui/core'
import { MyContext } from '../../context'

function Propiedad({ history, match }) {
  const context = useContext(MyContext)
    
  useEffect(() => {
    context.getProperty(match.params.id)
  }, [context, match.params.id])
  
  return (
    context.state && context.state.property && (
      <Box
        minW="80vw" 
        rounded="lg" 
        overflow="hidden" 
        mt="15vh"
        mr="5vw" 
        mb="5vh"
        ml="5vw"
        minH="80vh"
      >
      <Image src={context.state.property.imageURL} alt={context.state.property.type} />
      
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
            {context.state.property.type}
          </Box>
        </Box>
        
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {context.state.property.description}
        </Box>

        <Box
          mt="1"
          as="h5"
          lineHeight="tight"
          isTruncated
        >
          {context.state.property.direction}
        </Box>
        
        <Box>
          {context.state.property.price}
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
          {context.state.property.owner.name}
        </Box>

      </Box>
    </Box>
    )   
  )
  
}

export default Propiedad