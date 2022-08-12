import React, {useState} from 'react'
import CartItem from './CartItem'
import Total from './Total'
import style from "./cart.module.css"

const cartData = [
    {
        id:1,
        label:"Nuddles",
        price: "30",
        qty: 1
    },
    {
        id:2,
        label:"Biryani",
        price: "90",
        qty: 1
    },
    {
        id:3,
        label:"Chips",
        price: "10",
        qty: 1
    }
]

const CartContainer = () => {

 const [data, setData] = useState(cartData)

const calculateTotal = (cartData) =>{
   return cartData.reduce((acc, p) => acc + (p.price * p.qty), 0)
} 

const handleQuantity = (id, amount) =>{
    let newData = data.map((elem)=>{
        if(elem.id === id) 
        {
            return{
                ...elem,
                qty: elem.qty + amount
            }
        } 
        else{
            return elem
        } 
       
    })
    setData(newData)
}

  return (
    <div className={style.container}>

        <h1>Food Cart</h1>

        {
            data.map((elem)=>(
                <CartItem 
                  key = {elem.id}
                  label={elem.label}
                  price = {elem.price}
                  qty={elem.qty}
                  id={elem.id}
                  handleQuantity={handleQuantity}
                />
            ))
        }
           
           <Total  total = {calculateTotal(data)}/>
    </div>
  )
}

export default CartContainer