import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Grid, Image, Text } from '@chakra-ui/react'
import style from "./cart.module.css"
import {Link} from "react-router-dom"
const Womens = () => {

 
  const [women, setwomen] = useState([])
  
  
   //let type = "womensData";

  useEffect(() => {
    
    fetch(`http://localhost:8080/womensData`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
      setwomen(res)
    })
   
  }, [])
  



  return (
    <div className={style.container}>
      <h1>Womens Page</h1> 
            
           
            <Grid templateColumns='repeat(4,1fr)' gap={6}>
            
                    {women.map((elem)=>(
                      <Link to={`/womenspage/${elem.id}`}>

                          <Box className={style.box}>
                            <Image className={style.pic} src={elem.images}/>
                            <Text >{elem.name}</Text>
                            <p>{elem.price}</p>  
                          </Box>

                      </Link>
                    ))
                    }            
            </Grid>
    </div>
  )
}

export default Womens