import React,{useState, useEffect} from 'react'
import Paginate from './Paginate'
import TodoList from './TodoList'
import style from "./todo.module.css"

const Todo = () => {

 const [data, setData] = useState([])
 const [load, setLoad] = useState(false)
 const [error, setError] = useState(false)
 const [page, setPage] = useState(1)

  useEffect(() => {

    
    setLoad(true)

    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${10}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res)
        setData(res)
        setLoad(false)
        setError(false)
    })
    .catch((error)=>{
        console.log(error)
        setError(true)
    })
  
    
  }, [page])
  
  return (
    <div className={style.todo}>
        <h2>Todos</h2>
        {load && <div>Loading.....</div>}
        {error && <div> Something Went wrong....</div>}
        <TodoList data= {data}/>
        <Paginate page={page} setPage={setPage}/>
    </div>
  )
}

export default Todo