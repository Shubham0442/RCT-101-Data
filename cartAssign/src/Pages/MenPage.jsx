import React, { useEffect,useState } from 'react'
import { Box, Grid, Image, Text } from '@chakra-ui/react'
import style from "./cart.module.css"
import {Link} from "react-router-dom" 



const MenPage = () => {

  //let type = "mensData";
  //var type = mensData

    const [mens, setMens] = useState([])

    useEffect(() => {
      fetch(`http://localhost:8080/mensData`)
      .then((res)=>{
          return res.json()
      })
      .then((res)=>{
          setMens(res)
      })
     
      
    }, [])
    
  return (
    <div className={style.container}>
           <h1>Mens Page</h1> 
          
            <Grid templateColumns='repeat(4,1fr)' gap={6}>
            
                {mens.map((elem)=>(
                   <Link to={`/menspage/${elem.id}`}>
                     <Box className={style.box} key={elem.id}>
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

export default MenPage