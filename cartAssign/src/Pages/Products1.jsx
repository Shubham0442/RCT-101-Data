import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import style from "./cart.module.css"

const Products = () => {

  const [data, setData] = useState([])
 const {id} = useParams() 
 
 

  useEffect(() => {
    
  
    fetch(`http://localhost:8080/womensData/${id}`)
    .then((res)=>{
      return res.json() 
    })
    .then((res)=>{
      console.log(res)
      setData(res)
    })
  
      
    
     
    
  }, [id])
  


  return (
    <div>Products Details 
      <div key={data.id} className={style.productDiv}>
        <img src={data.images} alt="2" />
            <div>
                <h3>{data.name}</h3>
                <p>{data.price}</p>  
                <button>Add To Cart</button>
            </div>  
        </div>    
    </div>
  )
}

export default Products