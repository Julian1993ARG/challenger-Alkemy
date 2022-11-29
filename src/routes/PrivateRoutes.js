import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user)

  return user.log ? children : <Navigate to='/login' />
}
