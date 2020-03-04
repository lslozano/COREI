import React from 'react'
import { Stack, Heading, Box, Image } from '@chakra-ui/core'
import { MyContext } from '../context'

function PropertyCard({ property }) {
  return (

    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
    <Image src={property.imageURL} alt={property.imageURL} />
   
    <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {property.type}
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

      <Box>
        {property.price}
        <Box as="span" color="gray.600" fontSize="sm">
          / wk
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyCard
