import { useDispatch } from 'react-redux'
import { addMovies } from '../store/actions/actions'
import { urlApiFilms } from '../api/urlApi'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useSearchFilm = () => {
  const mySwal = withReactContent(Swal)
  const dispatch = useDispatch()
  async function searchFilm (name) {
    try {
      const response = await urlApiFilms.get(`search/movie?query=${name}`)
      if (!response.data.results.length) throw new Error('Film not found')
      dispatch(addMovies(response.data.results))
    } catch (error) {
      mySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message
      })
    }
  }
  return searchFilm
}

export default useSearchFilm
