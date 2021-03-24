const axios = require('axios')

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {},
  params: {
    api_key: 'ec99c60e0ea4508c9e7527e0bb220882',
    language: 'es-ES'
  }
})
