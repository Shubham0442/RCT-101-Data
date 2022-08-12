import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {todoAdd} from "../store/action" 
const TodoApp = () => {

    const ref = useRef()
    const dispatch = useDispatch() 
    const todos  = useSelector((state)=>state.todo.todos)
    
    const addNew = () =>{
           
       let value = ref.current.value 

        dispatch(
            todoAdd({
                value:value,
                isCompleted: false
            }) 
        )
        ref.current.value = null
    }

    
  
  return (
    <h1>TodoApp
        <div>
            <input ref={ref} type="text" placeholder='type here..' /> 
            <button onClick={addNew}>Add</button>
        </div>
        <br/>
        <br/>
        {
            todos.map((elem)=>(
              <div key = {elem.id}>{elem.value}</div>
            ))
        }
    </h1>
  )
}

export default TodoApp