import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Counter</Link>
        <Link to="/todoapp">Todos</Link>
    </div>
  )
}

export default Navbar