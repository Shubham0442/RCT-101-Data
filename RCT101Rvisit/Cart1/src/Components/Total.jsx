import React from 'react'
import style from "./cart.module.css"

const Total = ({total}) => {
  return (
    <div className={style.total}>
        <h2>
           Total: {total}
        </h2>
      </div>
  )
}

export default Total