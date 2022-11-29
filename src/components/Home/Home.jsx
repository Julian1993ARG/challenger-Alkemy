import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line
import Card from '../Card/Card'// eslint-disable-line
import useGetMovies from '../../hooks/useGetMovies'
import Loading from '../Loading/Loading'
import { useSelector } from 'react-redux'

export default function Home () {
  const data = useSelector(state => state.movies)
  const {loading,setPage} = useGetMovies() // eslint-disable-line

  if (loading) return <Loading />
  return (
    <div className='container-fluid px-0 d-flex '>
      <div className='row justify-content-center '>

        {
        data.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))
      }
      </div>
    </div>
  )
}
