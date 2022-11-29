import axios from 'axios'

const apiKey = '2467840ef6277c40fc52e843eca85a11'

export const urlApi = axios.create({
  baseURL: 'http://localhost:4000/'
})

export const alkemyApi = axios.create({
  baseURL: 'http://challenge-react.alkemy.org'
})

export const urlApiFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: apiKey,
    language: 'en-US'
  }
})

export const urlApiFilmsGetImage = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/w500/'
})
