import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import { useFormik } from 'formik'
import style from './loginScreen.module.css'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/actions/actions'//eslint-disable-line
import { alkemyApi } from '../../api/urlApi'
import Cookies from 'universal-cookie'
import { validateUser } from './validateSchemma'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function LoginScreen () {
  const MySwal = withReactContent(Swal)
  // const [errorMesagge, setErrorMesagge] = useState({ error: false, message: '' })
  const cookies = new Cookies()
  const dispatch = useDispatch() //eslint-disable-line
  const { handleChange, handleSubmit, handleBlur, errors, values, touched, isSubmitting } = useFormik({
    initialValues: {
      email: 'challenge@alkemy.org',
      password: 'react'
    },
    validationSchema: validateUser,
    onSubmit: async values => {
      try {
        // const response = await urlApi.post('login', values)
        const response = await alkemyApi.post('/', { email: values.email, password: values.password })
        cookies.set('USER', response.data.token, { path: '/' })
        dispatch(loginUser(response.data))
        localStorage.setItem('USER', JSON.stringify(response.data))
        MySwal.fire({
          title: 'Welcome',
          text: 'You are logged in',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      } catch (error) {
        // setErrorMesagge(prev => ({ ...prev, error: true, message: error.response.data.error }))
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.error
        })
      }
    }
  })

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className='text-center'>Login</h1>
        <div className='form-outline mb-4'>
          <input
            type='email'
            id='email'
            className='form-control'
            onChange={handleChange}
            onBlur={handleBlur}
            name='email'
            value={values.email}

          />
          {touched.email && errors.email && <p className='text-danger'>{errors.email}</p>}
          <label className='form-label' htmlFor='email'>Email address</label>
        </div>

        <div className='form-outline mb-4'>
          <input
            name='password'
            type='password'
            id='password'
            className='form-control'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password && <p className='text-danger'>{errors.password}</p>}
          <label className='form-label' htmlFor='password'>Password</label>
        </div>

        <button disabled={isSubmitting} type='submit' className={`btn btn-primary btn-block ${isSubmitting && 'disabled'}`}>Sign in</button>
      </form>
    </div>
  )
}
