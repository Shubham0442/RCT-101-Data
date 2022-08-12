import React from 'react'
import style from "./cart.module.css"

const Quantity = ({qty, incrementQty, decrementQty}) => {
  return (
    <div className={style.quantity}>
        
        <button disabled={qty===0} onClick={decrementQty}>-</button>
            <div>
               <p>{qty}</p>
            </div>
        <button onClick={incrementQty}>+</button>
    </div>
  )
}

export default Quantity