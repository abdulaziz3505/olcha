import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { PRODUCTS } from "../../static/index"
import "./Products.css"
import { useDispatch } from 'react-redux'
import { ADD_TO_LIKE } from "../../context/action/actionType"
 
function Products() {
  const dispatch = useDispatch()

  return (
    <div className='product'>
      <div className="product__about">
           {
             PRODUCTS?.map((item, inx)=>
               <div className='product__data' key={inx}>

                <AiOutlineHeart onClick={()=> dispatch({type:ADD_TO_LIKE, payload: item})} className='product__heart'/>
                <Link to={`/product/${item.id}`}>
                 <img src={item?.urls[0]} alt="" />
                </Link>
                 <p className='product__name'>{item?.title}</p>
                 <del className='product__delete'>{item?.del}</del>
                 <p className='product__price'>{item?.price} so'm</p>
                 
                 <p className='product__credit'>{Math.floor(item?.price / 12)} So'm</p>
                 <button><FiShoppingCart/> Add to Cart</button>
                 <br />
               </div>)
           }
           <div className="product__reaction"></div>
      </div>
    </div>
  )
}

export default Products