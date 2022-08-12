import React from 'react'
import { useContext } from 'react';
import {AuthContext} from "../Context/AuthContextProvider"

const Authenticate = () => {

  const { state } = useContext(AuthContext);

  return (
    <div>
      <p>{state.isAuth ? `Login-Successful :-${state.token}`: ""}</p>
    </div>
  )
}

export default Authenticate