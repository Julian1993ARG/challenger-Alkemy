import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Cookies from 'universal-cookie'
import style from './nav.module.css'
import useSearchFilm from '../../hooks/searchFilm'

export default function Nav () {
  const location = useLocation()
  const searchFilm = useSearchFilm()
  const cookies = new Cookies()
  const logOut = () => {
    cookies.remove('USER')
    window.location.reload()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    searchFilm(e.target[0].value)
    e.target[0].value = ''
  }
  return (
    <header className='container-fluid mx-0 px-0 '>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>Films</NavLink>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarScroll' aria-controls='navbarScroll' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarScroll'>
            <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
              <li className='nav-item'>
                <NavLink className='nav-link  fs-4' aria-current='page' to='/'>Now Playing</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-4' to='/favorites'>Favorites</NavLink>
              </li>
              <li className='nav-item '>
                <a onClick={logOut} className={`nav-link text-danger ${style.logOut} fs-4`}>Log Out</a> {/* eslint-disable-line */}
              </li>
            </ul>
            {location.pathname === '/' && (
              <form onSubmit={handleSubmit} className='d-flex'>
                <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                <button className='btn btn-outline-success' type='submit'>Search</button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
