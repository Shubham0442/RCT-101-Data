import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import AddTodo from './AddTodo';
import { deleteTodo, getTodos, postTodo, toggleTodoStatus } from './api';
import TodoItems from './TodoItems';

const Todo = () => {
    const [data, setData]= useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        handleGetTodo()
    },[])

    const handleGetTodo = () =>{
        setLoading(true)
        setError(false)

        getTodos()
        .then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
            setError(true)
        })
    }

    const handleDelete = (id) =>{
          
        setLoading(true)

        deleteTodo(id)
        .then(()=>{
            handleGetTodo()
        })
    } 


    const handleAdd = (title) =>{

        setLoading(true)
          postTodo({
            title,
            status: false
          })
          .then (()=>handleGetTodo())
    }

    const handleToggle = (id, newStatus) =>{
        setLoading(true)

        toggleTodoStatus({
            id,
            newStatus
        })
        .then (()=>handleGetTodo())
        
    }

  return (
    <div>
        <h1>Todo CRUD</h1>
        <div>
            <AddTodo handleAdd = {handleAdd}/>
            <hr />

            {loading && <div>Loading....</div>}
        {error && <div>Error....</div>} 
            {
                data.map((elem)=>(
                    <TodoItems 
                    key={elem.id}
                    id = {elem.id}
                    title = {elem.title}
                    status = {elem.status}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Todo