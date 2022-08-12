import React from 'react'
import { useState, useRef } from 'react'
import style from "./style.module.css"


const Stopwatch = () => {

    const [timer, settimer] = useState(0) 
    const timerId = useRef(null)
    
    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + "h : " + minutes + "m : " + seconds + "s . " + milliseconds;
      }


    const start = ()=>{
      
        if(!timerId.current){
            let id = setInterval(()=>{
                settimer((prev)=>prev + 100)
            },100)
            timerId.current = id
        }
        
    }
          
    const stop = () => {
        clearInterval(timerId.current) 
        timerId.current = null 

      }     
          
    const reset = () =>{
          
        clearInterval(timerId.current)
        timerId.current = null
        settimer(0)
    } 




  return (
    <div>
        <h1>Stopwatch</h1>
        <h1>{msToTime(timer)}</h1>

        <div className={style.timerDiv}>
            <button className = {style.b1} onClick={start}>Start</button>
            <button className = {style.b2} onClick={stop}>Stop</button>
            <button className = {style.b3} onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch