import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'
import style from "./cart.module.css"

const CartItem = ({label, price, qty, handleQuantity, id}) => {
  return (
    <div className={style.cartItem}>
        <LabelPrice label ={label} price = {price}/>
        <Quantity qty={qty} 
        decrementQty={()=>handleQuantity(id,-1)}
        incrementQty={()=>handleQuantity(id,1)} 
        id ={id}/>
    </div>
  )
}

export default CartItem