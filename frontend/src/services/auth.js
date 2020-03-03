import axios from 'axios';
// let baseURL;
// process.env.NODE_ENV === 'production'
//   ? (baseURL = 'here should be your production endpoint')
//   : (baseURL = 'http://localhost:3000');

//REVISAR MENSAJE
const baseURL = 'http://localhost:3000'

const service = axios.create({ withCredentials: true, baseURL });


const AUTH_SERVICE = {
  SIGNUP: async form => {
    const { data } = await service.post('/signup', form)
    return data
  },
  LOGIN: async form => {
    const { data } = await service.post('/login', form)
    return data
  },
  LOGOUT: async () => {
    const { data } = await service.get('/logout')
    return data
  },
  CREATE: async form => {
    const { data } = await service.post('/publicar', form)
    return data
  },
  UPLOADPHOTO: async photo => {
    return await service.post('/upload', photo)
  },
  uploadImage: async image => {
    return await service.post('/uploadImage', image)
  },
  getAllProjects: async () => {
    const { data } = await service.get()
    return data
  }
}

export default AUTH_SERVICE