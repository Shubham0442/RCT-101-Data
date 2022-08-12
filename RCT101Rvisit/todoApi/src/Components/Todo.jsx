import React from 'react'
import TodoList from './TodoList'
import { useState, useEffect } from 'react'

const Todo = () => {

    const [data, setData] = useState([])

    const getTodo = () =>{
        
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
           return res.json()
        })
        .then((res)=>{
            console.log(res)
            setData(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(() => {
      getTodo()
    }, [])
    

  return (
    <div>
        
        <TodoList data = {data}/>
    </div>
  )
}

export default Todo