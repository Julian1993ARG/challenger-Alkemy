import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from '../components/LoginScreen/LoginScreen'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoutes'
import HomeRoutes from './HomeRoutes'

export default function appRouter () {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<PublicRoute><LoginScreen /></PublicRoute>}
        />
        <Route
          path='/*'
          element={<PrivateRoute><HomeRoutes /></PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
}
