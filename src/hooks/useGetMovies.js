import { useEffect, useState } from 'react'
import { urlApiFilms } from '../api/urlApi'
import { addMovies } from '../store/actions/actions'
import { useDispatch } from 'react-redux'

export default function useGetMovies () {
  const dipatch = useDispatch()
  const [page, setPage] = useState(1)
  const [state, setState] = useState({
    loading: false
  })// eslint-disable-line

  const getMovies = async () => {
    setState({
      ...state,
      loading: true
    })
    const response = await urlApiFilms.get('movie/now_playing', {
      params: {
        page
      }
    })
    setState({
      loading: false
    })
    dipatch(addMovies(response.data.results))
  }

  useEffect(() => {
    getMovies()
  }, [page])

  return {
    ...state,
    setPage
  }
}
