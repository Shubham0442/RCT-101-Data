import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Pages/cart.module.css"
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className={style.Nav}>
        <img className={style.logoo} src="https://cdn.shopify.com/s/files/1/0576/8124/8453/files/383_x_450_px_180x.png?v=1623169781" alt="4" />
        <Link to="/">Home</Link>
        <Link to="/menspage">Mens</Link>
        <Link to="/womenspage">Womens</Link>
        <Link to="/contactus">Contact us</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/cart"><p className={style.icons}><FaShoppingCart/></p></Link>
    </div>
  )
}

export default Navbar