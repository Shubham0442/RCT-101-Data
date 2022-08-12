import React, { useRef, useState } from 'react'

const InputFocus = () => {
    const focusRef = useRef(null)
    

    const handleFocus =()=>{
        focusRef.current.focus()
    }
    
  return (
    <div>
        <input type="text" placeholder='enter something' ref={focusRef}/>
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default InputFocus