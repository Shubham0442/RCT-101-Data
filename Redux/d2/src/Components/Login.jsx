import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../AuthRedux/authAction'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [ form, setForm ] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) =>{
        let { name, value } = e.target 
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.post(`https://reqres.in/api/login`,{
            email : form.email,
            password : form.password
        })
        .then((res)=>{
            console.log(res.data)   
            dispatch(loginSuccess(res.data.token))
            navigate("/")
        })
    }
  return (
    <div>
        <h4>Login</h4>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                </div>
                <div>
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login