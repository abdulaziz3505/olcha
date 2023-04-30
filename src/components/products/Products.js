import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { PRODUCTS } from "../../static/index"
import "./Products.css"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, ADD_TO_LIKE, REMOVE_LIKE } from "../../context/action/actionType"
import { db } from "../../server"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"
 
function Products({admin}) {
  const dispatch = useDispatch()
  const likes = useSelector(s=>s.heart)
  const cart = useSelector(s=>s.cart)
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)

  const productColRef = collection(db, "products")

  useEffect(()=>{
    const getProducts = async () =>{
      const products = await getDocs(productColRef)
      setData(products.docs.map((pro)=> ({ ...pro.data(), id: pro.id}) ))
    }
    getProducts()
  }, [refresh])

  console.log(data);
  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
  }


  const addToCart = (item) => {
    let index = cart.findIndex(i=> i.id === item.id)
    if( index < 0 ){
      return dispatch({type: ADD_TO_CART, payload: [...cart, {...item, qty: 1}]})
    }
    let newCart = cart.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
     
    dispatch( {type: ADD_TO_CART, payload: newCart})
  }
  
    const deleteProduct = async(id)=>{
      await deleteDoc(doc(db, "products", id))
        .then(res=> {
          console.log(res)
          setRefresh(!refresh)
        })
        .catch(res=> console.log(res))
    }

  return (
    <div className='product'>
      <div className="product__about">
           {
             data?.map((item, inx)=>
               <div className='product__data' key={inx}>


                <Link to={`/product/${item.id}`}>
                 <img src={item?.urls[0]} alt="" />
                </Link>
                 <h3 className='product__name'>{item?.title.length > 30 ? item.title.slice(0, 30)+"..." : item.title}</h3>
                 <p className='product__price'>{item?.desc}</p>
                 
                {
                  admin ? <button onClick={()=> deleteProduct(item.id)}>Delete</button>
                   : 
                   <button onClick={()=> addToCart(item)}>{item?.price}</button>

                }
                 <br />
               </div>)
           }
           <div className="product__reaction"></div>
      </div>
    </div>
  )
}

export default Products