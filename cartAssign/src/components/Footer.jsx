import React from 'react'
import { Link } from 'react-router-dom' 
import { AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp, AiOutlineTwitter } from 'react-icons/ai';
import style from "../Pages/cart.module.css"
const Footer = () => {
  return (
    <div className={style.footerA}>
        <h2>Quick Links</h2>
        <div className={style.links}>
            <Link to="https://ektarfa.co.in/pages/refunds-returns-cancellation-policy">Return/Refund Policy</Link>
            <Link to="https://ektarfa.co.in/pages/delivery">Delivery</Link>
            <Link to="https://ektarfa.co.in/pages/track-order">Track Order</Link>
            <Link to= "/contactus">Contact us</Link>
            <Link to= '/aboutus'>About us</Link>
        </div>
        <hr/>
        <div className={style.botton}>
            
                <img className={style.pay} src="https://payg.in/assets/img/upi-payments.png" alt="3" />
            
            <div className={style.icons}>
                 <AiFillFacebook />
                 <AiFillInstagram/>
                 <AiOutlineWhatsApp/>
                 <AiOutlineTwitter/>
            </div>
        </div>
    </div>
  )
}

export default Footer