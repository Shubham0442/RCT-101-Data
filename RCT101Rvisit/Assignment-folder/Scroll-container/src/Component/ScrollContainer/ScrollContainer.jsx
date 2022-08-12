import React, { useRef } from 'react'

const ScrollContainer = () => {
  
    const scrollRef = useRef(null)

    
    const handleScrollBottom = () =>{
        scrollRef.current.scrollIntoView({behavior:"smooth"});
        //scrollRef.current.scrollBottom = 100;
    }

    const handleScrollTop = () =>{
        scrollRef.current.scrollTop = 0;
    }
    let Array = [];

    for(let i = 0; i<=100; i++)
    {
        Array.push(i)
    }

    console.log(Array) 

    

  return (
    <div>
        <button onClick = {handleScrollBottom}>Go to bottom</button>
    <div ref={scrollRef} style={{maxHeight:"250px", border: "1px solid", overflowY:"auto"}}>
        {
        Array.map((elem)=>(
          
            <div>{elem}</div>
            
        ))
        } 
       </div>
       <button onClick = {handleScrollTop}>Go to Top</button>
       
    </div>
  )
}

export default ScrollContainer