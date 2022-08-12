import React from 'react'

import TodoItems from './TodoItems'


const TodoList = ({data}) => {
    
  return (
    <div style={{border:"1px solid", width:"60%", margin:"auto", padding:"40px"}}>
        <h1>Todo</h1>
         {
            data.map((elem)=>(
                    <TodoItems 
                        id= {elem.id}
                        key = {elem.id}
                        title = {elem.title}
                        completed = {elem.completed}
                        />  
                    
                    ))
         }
    </div>
  )
}

export default TodoList