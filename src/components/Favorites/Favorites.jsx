import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'

export default function Favorites () {
  const data = useSelector(state => state.favorite)
  if (data.length === 0) {
    return (
      <div className='container-fluid px-0 d-flex justify-content-center'>

        <h1 className='text-center'>No favorites</h1>

      </div>

    )
  }
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
