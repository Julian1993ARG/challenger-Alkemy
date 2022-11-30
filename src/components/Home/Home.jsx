import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line
import Card from '../Card/Card'// eslint-disable-line
import useGetMovies from '../../hooks/useGetMovies'
import Loading from '../Loading/Loading'
import { useSelector } from 'react-redux'
import style from './home.module.css'

export default function Home () {
  const data = useSelector(state => state.movies)
  const {loading,setPage} = useGetMovies() // eslint-disable-line

  if (loading) {
    return (
      <div className={`container-fluid d-flex justify-content-center align-items-center ${style.center} `}>
        <Loading />
      </div>
    )
  }
  return (
    <div>
      <h1 className='text-center'>Now Playing</h1>
      <section className='container-fluid px-0 d-flex '>
        <div className='row justify-content-center '>

          {
        data.map((movie) => (
          <Card key={movie.id} {...movie} loading={loading} />
        ))
      }
        </div>
      </section>
    </div>
  )
}
