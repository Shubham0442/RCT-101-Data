import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import axios from "axios"
const UsersPage = () => {

  const {id} = useParams()
  const [user, setUser] = useState({});

  console.log(id)

  useEffect(() => {

    if(id){
        //https://reqres.in/api/users/1
    
    axios.get(`https://reqres.in/api/users/${id}`)
    .then((res)=>{
        setUser(res.data.data)
        console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  }, [id])

console.log(user)
  return (
    <div>
        <img src={user.avatar} alt="1" />
        <h4>{user.first_name} {user.last_name}</h4>
        <p>Contact:-{user.email}</p>
    </div>
  )
}

export default UsersPage