import React,{useEffect, useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleClick = ()=>{
        setCount(count + 1)
    }

    useEffect(() => {
      
        //console.log("clicked")
        document.title = `clicked ${count} times`
     
    }, [count])
    


  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter