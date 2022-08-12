import React from 'react'

const TodoList = ({data}) => {
  return (
    <div>
        {
            data.map((elem)=>(
                <div key = {elem.id} 
                     style={{
                        display:"flex",
                        alignItems:"center",
                        gap:"10px", 
                        width:"70%", 
                        margin:"auto"}}
                        >
                    <p>{elem.id}</p>
                    <h5>{elem.title}</h5>
                    <p>{elem.completed ? "Done" : "Not Done Yet"}</p>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList