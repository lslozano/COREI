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
import { Link } from 'react-router-dom'

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
            backgroundColor="black"
            w="100vw"
            h="10vh"
            p={8}
            align="center"
            justify="space-between"
          >
            <Text fontSize="xl" fontWeight="bolder" color="white" as={Link} to="/">
              COREI
            </Text>
            <Menu>
              <MenuButton
                as={IconButton}
                variant="outline"
                aria-label="Menu"
                size="lg"
                icon="menu"
                backgroundColor="white"
              ></MenuButton>
              <MenuList backgroundColor="white">
                {!context.state.isLogged && (
                  <>
                    <MenuItem color="black" onClick={() => go('/')}>Inicio</MenuItem>
                    <MenuItem color="black" onClick={() => go('/login')}>Inicia sesión</MenuItem>
                    <MenuItem color="black" onClick={() => go('/signup')}>Regístrate</MenuItem>
                  </>
                )}
                {context.state.isLogged && (
                  <>
                    <MenuItem onClick={() => go('/')}>Inicio</MenuItem>
                    <MenuItem onClick={() => go('/profile')}>Perfil</MenuItem>
                    <MenuItem onClick={() => go('/config')}>Configuración</MenuItem>
                    <MenuItem onClick={() => go('/rentar')}>Rentar</MenuItem>
                    <MenuItem onClick={() => go('/comprar')}>Comprar</MenuItem>
                    <MenuItem onClick={() => go('/publicar')}>Públicar</MenuItem>
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