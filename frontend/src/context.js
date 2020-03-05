import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
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
    property: null,
    properties: [],
    loggedUser: null,
    isLogged: false
  }

  handleSignupInput = e => {
    const { formSignup } = this.state
    const { name, value } = e.target
    formSignup[name] = value
    this.setState({ formSignup })
  }

  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({ formSignup: { name: '', email: '', password: ''}})
    return await AUTH_SERVICE.SIGNUP(form)
  }


  handleLoginInput = e => {
    const { formLogin } = this.state
    const { name, value } = e.target
    formLogin[name] = value
    this.setState({ formLogin })
  }

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

  handleLogout = async () => {
    await AUTH_SERVICE.LOGOUT()
    this.props.history.push('/')
    this.setState({ loggedUser: null, isLogged: false })
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

  componentDidMount = async () => {
    let { properties } = await AUTH_SERVICE.getAllProperties()
    this.setState(prevstate => ({
      ...prevstate,
      properties: properties
    }))
  }

  getProperties = async () => {
    let { properties } = await AUTH_SERVICE.getAllProperties()
    this.setState(prevstate => ({
      ...prevstate,
      properties: properties
    }))
  }
  
  getProperty = async (id) => {
    this.setProperty( await AUTH_SERVICE.getProperty(id))
    
  }

  setProperty = (property) => {
    this.setState({property})
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
      handlePublicarSubmit,
      getProperties,
      getProperty,
      setProperty
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
          handlePublicarSubmit,
          getProperties,
          getProperty,
          setProperty
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }

}

export default withRouter(MyProvider)