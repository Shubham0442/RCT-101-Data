import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'></Link>
        <Link to='/home'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/users'>Users</Link>
    </div>
  )
}

export default Navbar