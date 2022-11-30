import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../../hooks/useDetails'
import style from './details.module.css'
import Loading from '../Loading/Loading'
import stars from '../utilities/stars'

export default function Details () {
  const { id } = useParams()
  const { cast, isLoading, movieFull } = useMovieDetails(id) // eslint-disable-line
  console.log(isLoading, movieFull)

  if (isLoading) return <Loading />
  const reputation = stars(Math.round(movieFull.vote_average))
  return (
    <div className={`container-fluid d-flex justify-content-center ${style.container}`}>
      <div className={`card mt-3 ${style.card}`}>
        <img src={`https://image.tmdb.org/t/p/original/${movieFull.backdrop_path}`} className='card-img-top' alt={movieFull.title} />
        <div className='card-body'>
          <h5 className='card-title'>{movieFull.title}</h5>
          <p className='card-text'>{movieFull.overview}</p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Genres: {movieFull.genres.map(genre => ' ' + genre.name).toString()}</li>
          <li className='list-group-item'>Budget: $ {movieFull.budget !== 0 ? movieFull.budget.toLocaleString('es-MX') : 'No data'}</li>
          <li className='list-group-item text-warning'>{reputation.map(star => star)} <span className='text-secondary'>{movieFull.vote_average.toFixed(2)}</span></li>
        </ul>
      </div>
    </div>
  )
}
