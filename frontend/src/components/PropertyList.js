import React, { useContext } from 'react'
import { MyContext } from '../context'
import PropertyCard from './PropertyCard'
import {
  SimpleGrid,
  Link
} from '@chakra-ui/core'
function PropertyList(){
  const context = useContext(MyContext)
return(
    <SimpleGrid m="10px" mt='10vh' minChildWidth="300px" justify='center' columns={[1, 2, 3]} spacing={10}>
      <>
      {console.log('bus', context)
      }
      {context.state.property && context.state.property.properties ? (
        context.state.property.properties.map((property,index) => < Link   key={index} href={`rentas/${property.id}`}><PropertyCard key={property.id} type={property.type.type} image={property.imageURL} description={property.description} direction={property.direction}/></Link>)
      ):(null)}
      </>
</SimpleGrid>
)
}
export default PropertyList