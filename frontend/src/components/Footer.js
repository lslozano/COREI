import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex
} from '@chakra-ui/core'
import { MyContext } from '../context'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <MyContext.Consumer>
    {context => {
        return (
        <Flex
            bottom={0}
            zIndex="99"
            textAlign="center"
            backgroundColor="#000"
            w="100vw"
            justify="center"
        >
          <Breadcrumb>
            <BreadcrumbItem color="white">
              <BreadcrumbLink as={Link} to="/info/about">
                Acerca de
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="white">
              <BreadcrumbLink as={Link} to="/info/privacy">
                Privacidad
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem color="white">
            <BreadcrumbLink as={Link} to="/info/terms">
                Terminos y Condiciones
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        )       
    }}
    </MyContext.Consumer>
  )
}
export default withRouter(Footer)