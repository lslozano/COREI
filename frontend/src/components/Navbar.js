import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton
} from '@chakra-ui/core'
import { MyContext } from '../context'

function Navbar({ history }) {
  const go = path => history.push(path)
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            pos="fixed"
            top={0}
            zIndex="99"
            backgroundColor="white"
            w="100vw"
            h="10vh"
            p={8}
            align="center"
            justify="space-between"
          >
            <Text fontSize="xl" fontWeight="bolder" onClick={() => go('/')}>
              COREI
            </Text>
            <Menu>
              <MenuButton
                as={IconButton}
                variant="outline"
                variantColor="whity"
                aria-label="Menu"
                size="lg"
                icon="menu"
              ></MenuButton>
              <MenuList>
                {!context.state.isLogged && (
                  <>
                    <MenuItem onClick={() => go('/')}>Inicio</MenuItem>
                    <MenuItem onClick={() => go('/login')}>Iniciar sesión</MenuItem>
                    <MenuItem onClick={() => go('/signup')}>Registro</MenuItem>
                  </>
                )}
                {context.state.isLogged && (
                  <>
                    <MenuItem onClick={() => go('/')}>Inicio</MenuItem>
                    <MenuItem onClick={() => go('/profile')}>Perfil</MenuItem>
                    <MenuItem onClick={context.handleLogout}>Cerrar sesión</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        )
      }}
    </MyContext.Consumer>
  )
}
export default withRouter(Navbar)