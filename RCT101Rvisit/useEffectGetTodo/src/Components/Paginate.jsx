import React from 'react'
import style from "./todo.module.css"


const Paginate = ({page, setPage}) => {
  return (
    <div className={style.pageDiv}>
        <button disabled = { page === 1 } onClick={()=>setPage(page - 1)}>Prev</button>
        <span>{page}</span>
        <button onClick={()=>setPage(page + 1)}>Next</button>
    </div>
  )
}

export default Paginate