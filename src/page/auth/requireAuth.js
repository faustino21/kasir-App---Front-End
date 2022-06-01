import React from 'react'
import { Navigate } from 'react-router-dom'

export const RequireAuth = ({children, redirectTo}) => {
  if(sessionStorage.getItem('token')){
      return children
  } else {
      return <Navigate to={redirectTo}/>;
  }
}
