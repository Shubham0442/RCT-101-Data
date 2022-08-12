import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContaxt } from '../Context/AppContext' 


const PrivateRoute = ({children}) => {

    const [state] = useContext(AppContaxt)
    
    if(!state.isAuth)
    {
       return <Navigate to = "/login" />
    }
    return children
  
}

export default PrivateRoute