import { useState, useEffect } from 'react'
import { urlApiFilms } from '../api/urlApi'

export default function useMovieDetails (movieId) {
  const [state, setState] = useState({
    isLoading: true,
    movieFull: undefined,
    cast: []
  })

  const getMovieDetails = async () => {
    const movieDetailsPromise = urlApiFilms.get(`movie/${movieId}`)
    const castPromise = urlApiFilms.get(`movie/${movieId}/credits`)

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise
    ])
    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  return {
    ...state
  }
}
