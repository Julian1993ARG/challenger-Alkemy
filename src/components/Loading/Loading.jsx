import React from 'react'
import style from './loading.module.css'

export default function Loading () {
  return (
    <div className='d-flex justify-content-center align-items-center w-100'>
      <span className={style.loader} />
    </div>
  )
}
