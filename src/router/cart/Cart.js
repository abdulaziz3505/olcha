import React from 'react'
import Empty from "../../components/empty/Empty"
import "./Cart.css"
import photo from "../../assets/cart.png"


function Cart() {
  return (
    <div className='container cart'>
        <Empty url={photo} text="Savatchangiz bo'sh"/>
    </div>
  )
}

export default Cart