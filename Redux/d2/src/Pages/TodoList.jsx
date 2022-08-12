import React, { useEffect}from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { getTodo, deletingTodo, updataTodo} from '../TodoRedux/action'
import { useDispatch } from 'react-redux'

const TodoList = () => {

    const state = useSelector((state)=>state, shallowEqual)
    console.log("todoList", state)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        deletingTodo(dispatch,id)
    }

    const toggleStatus = (id, newStatus)=>{
        updataTodo(dispatch, id, { status: newStatus})
    }

    useEffect(()=>{
        getTodo(dispatch)
    },[dispatch])

  return (
    <div>
        {
            state.todoReducer.todos.map((elem)=>(
                <div key={elem.id} 
                style={
                    {width:"38%",
                     border:"1px solid red",
                     margin:"auto",
                     display:"flex",
                     justifyContent: 'space-around',
                     alignItems: "center",
                     marginTop:"15px"
                    }
                     }>
                        <div>
                            <h4>{elem.title}</h4>
                        </div>
                        <div>
                           <button onClick={()=>toggleStatus(elem.id, !elem.status)}>{elem.status ? "DONE" : "NOT DONE"}</button>
                        </div>
                        <div>
                           <button onClick = {()=>handleDelete(elem.id)}>Delete</button>
                        </div>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList