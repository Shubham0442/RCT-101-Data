import React from 'react'
import { Link } from 'react-router-dom'
import style from './todo.module.css'
const Navbar = () => {
  return (
    <div >
      <div className={style.nav}>
        <Link to = "/" >Home</Link>   
        <Link to = "/todo">Todo</Link> 
      </div>
        <hr />
    </div>
  )
}

export default Navbar