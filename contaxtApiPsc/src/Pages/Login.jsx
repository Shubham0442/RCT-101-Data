import axios from 'axios'
import React, {useContext, useState} from 'react'
import { Navigate } from 'react-router-dom'
import { AppContaxt } from '../Context/AppContext'


const Login = () => {

 const [email, setEmail] = useState("")
 const [password, setpassword] = useState("") 

 const[state, dispatch] = useContext(AppContaxt);

 const handleSubmit = (e) =>{
      
    e.preventDefault()

    
    axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data: {
            email,
            password
        }
    })
    .then((res)=>{
        
        dispatch ({
            type: "Login_Success",
            token: res.data.token
        })
        alert("success")
    })
    .catch((error)=>{
        alert("erros")
        console.log(error)
        dispatch ({
            type: "Login_Fail",
            token: null
        })

        dispatch ({
            type: "Logout_Success",
            token: null
        })
    })

 }

 console.log(`isAuth",${state.isAuth}`)

 if(state.isAuth)
 {
     return <Navigate to="/users"></Navigate>
 }

  return (
    <div>
          <form onSubmit={handleSubmit}>
              <div>
                  <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='enter email'/> 
              </div>
              <div>
                  <input name='password' value={password} onChange={(e)=>setpassword(e.target.value)}  type="text" placeholder='enter passward'/> 
              </div>
              <div>
                   <button type='submit' onClick={handleSubmit}>Submit</button>
              </div>
          </form>
    </div>
  )
}

export default Login