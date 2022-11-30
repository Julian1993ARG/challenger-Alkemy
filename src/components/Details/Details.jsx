import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../../hooks/useDetails'
import style from './details.module.css'
import Loading from '../Loading/Loading'
import stars from '../utilities/stars'

export default function Details () {
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams()
  const { cast, isLoading, movieFull } = useMovieDetails(id) // eslint-disable-line
  console.log(cast, movieFull)
  if (isLoading) return <Loading />
  const reputation = stars(Math.round(movieFull.vote_average))
  return (
    <>
      <div className={`container-fluid d-flex justify-content-center mb-3 ${style.container}`}>
        <div className={`card mt-3 ${style.card}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movieFull.backdrop_path}`}
            className={`card-img-top ${!loaded && 'd-none'}`}
            alt={movieFull.title}
            onLoad={() => setLoaded(true)}
          />
          <div className='card-body'>
            <h5 className='card-title'>{movieFull.title}</h5>
            <p className='card-text'>{movieFull.overview}</p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Genres: {movieFull.genres.map(genre => ' ' + genre.name).toString()}</li>
            <li className='list-group-item'>Budget: $ {movieFull.budget !== 0 ? movieFull.budget.toLocaleString('es-MX') : 'No data'}</li>
            <li className='list-group-item text-warning'>{reputation.map(star => star)} <span className='text-secondary'>{movieFull.vote_average.toFixed(2)}</span></li>
            {movieFull.homepage && <li className='list-group-item'>WebSite: <a target='_black' href={movieFull.homepage}>{movieFull.homepage}</a></li>}
          </ul>
        </div>
      </div>
      <div className='container-fluid d-flex justify-content-center'>
        <div className='card mt-3'>
          <div className='card-body'>
            <h5 className='card-title'>Cast</h5>
            <div className='row justify-content-center'>
              {
                cast.filter(actor => actor.profile_path !== null).map(actor => (
                  <div className=' col-sm-4 col-lg-2 mx-2 my-2 ' key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} className='card-img-top' alt={actor.name} />
                    <h5 className='card-title'>{actor.name}</h5>
                    <p className='card-text'>Character: {actor.character}</p>
                  </div>
                ))
              }

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
