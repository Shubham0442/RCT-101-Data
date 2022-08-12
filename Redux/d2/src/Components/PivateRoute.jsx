import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from "react-router-dom"

const PivateRoute = ({children}) => {

    const Auth = useSelector((state)=>state.authReducer.auth.isAuth)

    if(Auth === false)
    {
        return <Navigate to="/login"/>
    }
  return children
  
}

export default PivateRoute