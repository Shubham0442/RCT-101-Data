import React, { useRef } from 'react'
import { useState,useEffect } from 'react' 



const Timer1 = ({initial}) => {

    const [count, setCount] = useState(initial);
    const timerRef = useRef(null);
    

useEffect(() => {
  
    return stopTimer; 
    
}, [])
//console.log(timerRef)
const startTimer = () =>{
  
   if(timerRef.current !== null) return;

    timerRef.current = setInterval(()=>{
        setCount((count)=>count + 1);
        
    }, 1000)
   
}

const stopTimer =()=>{
    clearInterval(timerRef.current)
    timerRef.current = null;
}
const resetTimer =()=>{
      stopTimer();
      setCount(0)
}


  return (
    <div>
        <h1>Timer</h1>
        <h1>{count}</h1>
        <div>
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>PAUSE</button>
            <button onClick={resetTimer}>RESET</button>
        </div>

        
    </div>
  )
}

export default Timer1