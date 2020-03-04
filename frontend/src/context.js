import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
//import axios from 'axios'
export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    formSignup: {
      name: '',
      email: '',
      password: ''
    },
    formLogin: {
      email: '',
      password: ''
    },
    formPublicar: {
      imageURL: '',
      type: '',
      description: '',
      direction: '',
      price: ''
    },
    
    property: {
        imageURL: '',
        type: '',
        description: '',
        direction: '',
        price: ''
    },
    properties: [],
    loggedUser: null,
    isLogged: false
  }

  //Propertysearch()

  handleLogout = async () => {
    await AUTH_SERVICE.LOGOUT()
    this.props.history.push('/')
    this.setState({ loggedUser: null, isLogged: false })
  }
  //Esta función destructura de el estado la form para poder acceder a
  //a sus key value pairs.
  //Destructuramos la key y su valor de element y con . target lo 
  //obtenemos.
  //A formSignUp en su llave name le damos el valor que pasa en value del
  //e.target
  //Se actualiza el estado al final.
  handleSignupInput = e => {
    const { formSignup } = this.state
    const { name, value } = e.target
    formSignup[name] = value
    this.setState({ formSignup })
  }



  //Esta función destructura de el estado la form para poder acceder a
  //a sus key value pairs.
  //Destructuramos la key y su valor de element y con . target lo 
  //obtenemos.
  //A formLogin en su llave name le damos el valor que pasa en value del
  //e.target
  //Se actualiza el estado al final.
  handleLoginInput = e => {
    const { formLogin } = this.state
    const { name, value } = e.target
    formLogin[name] = value
    this.setState({ formLogin })
  }
  //La funcion asincrona recibe un evento; lo primero que hace es evitar la recarga 
  //de pagina con preventDefault. En seguida en una constante llamada form guardamos 
  //el state que actualizamos en la funcion handleSignUpInput. Despues limpiamos la informacion del signup
  //para terminar pasamos nuestra constante form a AUTH_SERVICE para mandar esa info al servidor. 
  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({ formSignup: { name: '', email: '', password: ''}})
    return await AUTH_SERVICE.SIGNUP(form)
  }

  handlePublicarInput = e => {
    let {name, value, type, files } = e.target
    value = (type === 'file') ? files[0] : value
    this.setState(prevstate => ({
      ...prevstate,
      formPublicar: {
        ...prevstate.formPublicar,
        [name]:value
      }
    }))
  }

  handlePublicarSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('imageURL', this.state.formPublicar.imageURL)
    formData.append('type', this.state.formPublicar.type)
    formData.append('description', this.state.formPublicar.description)
    formData.append('direction', this.state.formPublicar.direction)
    formData.append('price', this.state.formPublicar.price)
    await AUTH_SERVICE.CREATE(formData)
    return this.setState({ 
      formPublicar: {
        imageURL: '',
        type: '',
        description: '',
        direction: '',
        price: ''
    }})
  }

  uploadPhoto = e => {
    const formPhoto = new FormData()
    formPhoto.append('photoURL', e.target.files[0])
    AUTH_SERVICE.UPLOADPHOTO(formPhoto)
      .then(({ data }) => {
        this.setState({ loggedUser: data.user })
      })
      .catch(err => {
        return err
      })
  }

  uploadImage = e => {
    const formImage = new FormData()
    formImage.append('imageURL', e.target.files[0])
    AUTH_SERVICE.uploadImage(formImage)
      .then(({ data }) => {
        this.setState({ property: data.property })
      })
      .catch(err => {
        return err
      })
  }


//
  handleLoginSubmit = e => {
    e.preventDefault()
    const form = this.state.formLogin
    return AUTH_SERVICE.LOGIN(form)
      .then(({ user }) => {
        this.setState({
          loggedUser: user,
          isLogged: true
        })
        return { user, msg: 'logged' }
      })
      .catch(err => {
        this.setState({
          loggedUser: null,
          isLogged: false,
          formLogin: { email: '', password: '' }
        })
        return { user: null, msg: 'Invalid username/password.' }
      })
      .finally(() => this.setState({ formLogin: { email: '', password: '' } }))
  }

  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleLogout,
      uploadPhoto,
      uploadImage,
      handlePublicarInput,
      handlePublicarSubmit
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleLogout,
          uploadPhoto,
          uploadImage,
          handlePublicarInput,
          handlePublicarSubmit
      }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default withRouter(MyProvider)



