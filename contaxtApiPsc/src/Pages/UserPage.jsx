import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const UserPage = () => {

 const [ user, setuser] = useState([])
 const params = useParams()
   
    useEffect(() => {
      
        axios({url:`https://reqres.in/api/users/${params.id}`,
        method:"GET"
    })
    .then((res)=>{
        setuser(res.data.data)
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    
      
    }, [params.id])

    

  return (
    <div>
        <div key={user.id}>
            <img src={user.avatar} alt="1"/>
            <div>
                Id: {user.id}
                <br />
                Name: {user.first_name}
                <br />
                Last Name: {user.last_name}
                <br />
                Email: {user.email}
            </div> 
        </div>
    </div>
  )
}

export default UserPage