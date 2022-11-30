import { useEffect, useState } from 'react'
import { urlApiFilms } from '../api/urlApi'
import { addMovies } from '../store/actions/actions'
import { useDispatch } from 'react-redux'

export default function useGetMovies () {
  const dipatch = useDispatch()
  const [page, setPage] = useState(1)
  const [state, setState] = useState({
    loading: true
  })// eslint-disable-line
  const upPage = () => {
    setPage(page + 1)
  }

  const getMovies = async () => {
    const response = await urlApiFilms.get('movie/now_playing', {
      params: {
        page
      }
    })

    dipatch(addMovies(response.data.results))
    setTimeout(() => {
      setState({
        loading: false
      })
    }, 1000)
  }

  useEffect(() => {
    getMovies()
  }, [page])

  return {
    ...state,
    upPage
  }
}
