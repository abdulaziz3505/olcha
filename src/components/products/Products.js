import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { PRODUCTS } from "../../static/index"
import "./Products.css"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, ADD_TO_LIKE, REMOVE_CART, REMOVE_LIKE } from "../../context/action/actionType"
 
function Products() {
  const dispatch = useDispatch()
  const likes = useSelector(s=>s.heart)
  const cart = useSelector(s=>s.cart)
  console.log(cart)

  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
  }


  const addToCart = (item) => {
    console.log(item)
  }
  

  return (
    <div className='product'>
      <div className="product__about">
           {
             PRODUCTS?.map((item, inx)=>
               <div className='product__data' key={inx}>

                <div  className='product__heart'>
                  {
                    likes?.some(i => i.id === item.id) ? 
                    <AiFillHeart style={{color: "red"}} onClick={()=> dispatch({type:REMOVE_LIKE, payload: item.id})}/> : 
                    <AiOutlineHeart onClick={()=> addHeart(item)} />
                  }
                </div>
                <Link to={`/product/${item.id}`}>
                 <img src={item?.urls[0]} alt="" />
                </Link>
                 <p className='product__name'>{item?.title}</p>
                 <del className='product__delete'>{item?.del}</del>
                 <p className='product__price'>{item?.price} so'm</p>
                 
                 <p className='product__credit'>{Math.floor(item?.price / 12)} So'm</p>
                 <button onClick={()=> addToCart(item)}><FiShoppingCart/> Add to Cart</button>
                 <br />
               </div>)
           }
           <div className="product__reaction"></div>
      </div>
    </div>
  )
}

export default Products