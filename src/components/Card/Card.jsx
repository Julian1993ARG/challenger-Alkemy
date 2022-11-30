import React from 'react'
import style from './card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { favorite } from '../../store/actions/actions'
import { Link } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export default function Card (props) {
  const dispatch = useDispatch()
  let { title, overview, id, poster_path: posterPatch } = props
  const favorites = useSelector(state => state.favorite)
  const isFavorite = favorites.some(favorite => favorite.id === id)
  if (overview.length > 150) {
    overview = overview.slice(0, 150) + '...'
  }
  if (!posterPatch) return null

  const addOrRemoveFavorites = () => {
    dispatch(favorite(props))
  }

  return (
    <div className={`card ${style.card} mx-3 my-3 position-relative`}>
      <img src={`https://image.tmdb.org/t/p/w500${posterPatch}`} className='card-img-top' alt={id} />
      <div className='card-body'>
        <h5 className='card-title '>{title}</h5>
        <p className='card-text'>{overview}</p>
        <div className={style.button}>
          <Link to={`/details/${id}`} className='btn btn-primary'>More info</Link>
        </div>
        <div onClick={addOrRemoveFavorites} className={style.favorite}>
          {
              isFavorite
                ? <AiFillHeart className={style.heart} />
                : <AiOutlineHeart />
          }

        </div>
      </div>
    </div>
  )
}
