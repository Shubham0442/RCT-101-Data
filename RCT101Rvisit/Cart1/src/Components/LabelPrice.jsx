import React from 'react'
import style from "./cart.module.css"
const LabelPrice = ({label,price}) => {
   //label
   //price
  return (
    <div className={style.lebelPrice}>
        <h2>
          {label}
        </h2>
        <h3>
          ₹ {price}
         </h3>
    </div>
  )
}

export default LabelPrice