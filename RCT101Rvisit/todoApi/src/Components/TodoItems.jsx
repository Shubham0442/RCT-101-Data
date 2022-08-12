import React from 'react'



const TodoItems = ({completed, title, id}) => {

    //
  return (
    <div style={{display:"flex" , gap:"10px", alignItems:"center"}}>
        <td><p>{id}</p></td>
        <td><h5>{title}</h5></td>
        <td><p>{completed ? "Work Done" : "Work Not Done "}</p></td>        
    </div>
  )
}

export default TodoItems