import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static';
import "./SingleRoute.css"
import {BiCheckShield} from "react-icons/bi"
import {HiOutlineExclamationCircle} from "react-icons/hi"
import {TbTruckDelivery} from "react-icons/tb"
import {SlBasket} from "react-icons/sl"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../server"

function SingleRoute() {
    const params = useParams()

    const [data, setData] = useState([])

  const productColRef = collection(db, "products")

  useEffect(()=>{
    const getProducts = async () =>{
      const products = await getDocs(productColRef)
      setData(products.docs.map((pro)=> ({ ...pro.data(), id: pro.id}) ))
    }
    getProducts()
  }, [])


    const oneItem = data?.find(el => el.id === params.id)
    console.log(oneItem);
    
    if(!oneItem){
        return <div className='placeholder container'> 
                <div className='placeholder__image'></div>
                <div className='placeholder__text'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
             </div>        
    }
    
  return (
    <div className='container'>
        
        <h1 className='product_name_info'>{oneItem?.title}</h1>
        <div className="product__overall">
            <div className="product_pic_info">
                <div className="product__pic">
                    <img src={oneItem?.urls[0]} alt="" />
                </div>
                <div className="product__info">
                    <h2>{oneItem?.desc}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellat beatae illo natus harum ullam ad nisi necessitatibus, sint placeat deleniti rem voluptas nulla, tempore laboriosam quas, voluptatum error perferendis!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellat beatae illo natus harum ullam ad nisi necessitatibus, sint placeat deleniti rem voluptas nulla, tempore laboriosam quas, voluptatum error perferendis!</p>
                    <h5>Barcha xususiyatlarini ko'rish</h5>
                    <span><BiCheckShield className='guaranty'/> *** oy kafolat</span>
                </div>
            </div>
            <div className="product__sell">
                <div className="product__add">
                    <h2>{oneItem?.price.brm()} so'm</h2>
                    <p className='delivery_info'>Yetkazib berish to'g'risida ma'lumot: <HiOutlineExclamationCircle className='Exclamation'/></p>
                    <h3><TbTruckDelivery className='TruckDelivery'/> Standart yetkazib berish</h3>
                    <p className='delivery_time'>Manzilga qarab *** soatdan *** ish kunigacha yetkazib beriladi</p>
                    <hr />
                    <button className='product_add_bascet'><SlBasket className='product__bascet'/> Add to cart</button>
                    <button className='product_buy'>One click purchase</button>
                </div>
                <div className="product__add ">
                    <p className='delivery_info'>Bo'lib to'lash</p>
                    <h2>{oneItem?.price} so'm / 12 oy</h2>
                    <span className='bank_icon'>gladiator</span>
                    <span className='bank_icon'>BANK</span>
                    <hr />
                    <button className='product_add_bascet basket__red'>Pay in installments</button>
                    
                </div>
            </div>
            
                
            </div>
           
        </div>
   
  )
}

export default SingleRoute