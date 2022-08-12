import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import { singleTodo, deleteTodo } from '../store/Todo/action'
import style from '../components/todo.module.css'



const TodoList = () => {

 const item  = useSelector((state)=>state.todos)
 
 console.log(item)
  
 const dispatch = useDispatch()

 const{id} = useParams() 

 useEffect(() => {
  
  if(id)
  {
    singleTodo(dispatch,id)
  }
   

 }, [dispatch,id])

 const handleRemove= ()=>{
    
  deleteTodo(dispatch,id)
}
 


  return (
    <div>
      <h1>Todo Item</h1>
       
        <div className={style.todoItem}>
          <h4>{item.value}</h4>
          <p>{item.isCompleted ? "completed":" Not completed yet"}</p>
          <div><button onClick={handleRemove}>Remove</button></div>
        </div>
      
      </div>
  )
}

export default TodoList