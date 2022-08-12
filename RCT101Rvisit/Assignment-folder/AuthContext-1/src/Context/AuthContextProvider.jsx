
import React, { createContext, useState} from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

  let initialState = {
    isAuth: false,
    token: ""
  }

    const [state, setState] = useState(initialState)

    // const toggleAuth = () =>{
    //   setState({
    //       ...state,
    //       isAuth: ! isAuth,
    //       token:""
    //     })
    // }

  return (
    <AuthContext.Provider value = {{state, setState}}>
        {children}
    </AuthContext.Provider>
  )
}

 