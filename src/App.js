import { useEffect } from 'react'
import './App.css'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'
import { loginUser } from './store/actions/actions'
import AppRouter from './routes'

function App () {
  const dispatch = useDispatch()
  const cookies = new Cookies()
  const user = cookies.get('USER')
  useEffect(() => {
    // if (!user) return
    dispatch(loginUser(user))
  }, [user]) // eslint-disable-line

  return (
    <div className='App container-fluid mx-0 px-0 '>
      <AppRouter />
    </div>
  )
}

export default App
