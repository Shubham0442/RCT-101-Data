import React, { createContext, useState } from 'react'
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => { 

    const [state, setState] = useState({
        isAuth: false,
        token: null
    } )

    const handleLogin = (token) =>{
        setState({
            ...state,
            isAuth:true,
            token: token
        })
    }

    const handleLogout = () =>{
        setState({
            ...state,
            isAuth:false,
            token: null
        })
    }


  return (
    <div>
        <AuthContext.Provider value = {{state, handleLogin, handleLogout }}>
             {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider