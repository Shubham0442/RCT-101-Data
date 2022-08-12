import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Users = () => {

 const [ user, setuser] = useState([])
 const [page, setpage] = useState(1)
   
    useEffect(() => {
      
        axios({url:"https://reqres.in/api/users",
        method:"GET",
        params:{
            page
        }
    })
    .then((res)=>{
        setuser(res.data.data)
        console.log(res.data.data)
    })
    .catch((err)=>{
        console.log(err.message)
    })
    
      
    }, [page])

    

  return (
    <div>
        <div>
            
            <div>
                    <button disabled={page === 1} onClick={()=>setpage(1)}>1</button>
                    <button disabled={page === 2} onClick={()=>setpage(2)}>2</button>
            </div>
            
            
        </div>
         {
             user.map((elem)=>(
                 <div key={elem.id}>
                        <img src={elem.avatar} alt="1" />
                        <div>
                            Name: {elem.first_name}
                        </div>
                        <Link to={`/users/${elem.id}`}>See More</Link>
                 </div>
             ))
         }
    </div>
  )
}

export default Users