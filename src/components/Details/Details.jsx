import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../../hooks/useDetails'

export default function Details () {
  const { id } = useParams()
  const { cast, isLoading, movieFull } = useMovieDetails(id)
  console.log(cast, isLoading, movieFull)
  return (
    <div>Details</div>
  )
}
