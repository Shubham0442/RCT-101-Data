
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addTodo, getTodo } from '../store/Todo/action';
import style from '../components/todo.module.css'




const Todo = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todos) 
    const removeTodo = useSelector((state)=>state.remove)

    console.log(removeTodo);

    console.log(todos)

    const ref = useRef()
    
    const handleAdd = () =>{

      let value = ref.current.value 
      addTodo(dispatch,{  
            value : value,
            isCompleted: false
         })  
    }

    useEffect(() => {

       getTodo(dispatch)

    }, [dispatch]);
    
  
  return (
    <div>
        <h1>Todo App</h1>
        
        <input ref={ref} type="text" placeholder='Add todo here'/>
        <button onClick = {handleAdd}>Add</button>   

        <br />
        {
            todos.map((elem)=>(
                <div key = {elem.id} className={style.todoItem}> 
                      <div>
                        <Link to={`/todo/${elem.id}`}>
                            <div><p>{elem.value}</p></div>     
                        </Link> 
                      </div>
                             
                </div>
               
            ))
        }
    </div>
  )
}

export default Todo