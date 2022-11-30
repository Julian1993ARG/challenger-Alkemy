// import data from '../dataExample.json'

const initialState = {
  user: {
    log: false
  },
  favorite: [],
  movies: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          log: true,
          ...action.payload
        }
      }
    case 'FAVORITE':
      return {
        ...state,
        favorite: [...state.favorite.some(item => item.id === action.payload.id) ? state.favorite.filter(item => item.id !== action.payload.id) : [...state.favorite, action.payload]]
      }
    case 'ADD_MOVIES':
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      }
    default:
      return { ...state }
  }
}
