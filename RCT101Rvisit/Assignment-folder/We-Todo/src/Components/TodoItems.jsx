import React from 'react'

const TodoItems = ({id,title, status, handleDelete, handleToggle}) => {
  return (
    <div>
        <div  style={{display:"flex", justifyContent: "center", gap:"20px", marginBottom:"10px"}}>
            <div>{id}</div>
            <div>{title}</div>
            <button onClick={()=>handleToggle(id, !status)}>{status ? "Done": "Not Done"}</button>
            <button onClick={()=>handleDelete(id)}>DELETE</button>
        </div>
    </div>
  )
}

export default TodoItems