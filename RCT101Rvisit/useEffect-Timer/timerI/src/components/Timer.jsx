import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
    
        setInterval(()=>{
             setCount((prev) => prev + 1)
        },1000)
    }, [])
    
  return (
    <div>
        <h1>Timer</h1>
        <h1>{count}</h1>
    </div>
  )
}

export default Timer