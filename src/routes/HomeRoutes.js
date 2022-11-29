import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from '../components/Details/Details'
import Favorites from '../components/Favorites/Favorites'
import Home from '../components/Home/Home'
import Nav from '../components/Nav/Nav'

export default function HomeRoutes () {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />ç
        <Route path='/details/:id' element={<Details />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}
