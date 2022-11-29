// import axios from 'axios'
// import { urlApi } from '../../api/urlApi'

export function loginUser (payload) {
  return { type: 'LOGIN', payload }
}

export function favorite (payload) {
  return { type: 'FAVORITE', payload }
}

export function addMovies (payload) {
  return { type: 'ADD_MOVIES', payload }
}
