import React from 'react'
import { Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logoutSuccess } from '../AuthRedux/authAction'

const Navbar = () => {

    const Auth = useSelector((state)=>state.authReducer.auth.isAuth)
    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(logoutSuccess())
    }

  return (
    <div style={
        {
            display: "flex", 
            width : "60%", 
            margin:"auto", 
            alignItems:"center",
            justifyContent:"space-evenly",
            fontWeight:"800"
            }
        }>
        
            <Link to="/">Home</Link>
            {
                Auth ? <button onClick = {handleLogout}>Logout</button> : <Link to="/login">Login</Link>
            }
            
        
    </div>
  )
}

export default Navbar