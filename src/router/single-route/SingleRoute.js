import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static';
import "./SingleRoute.css"
import {BiCheckShield} from "react-icons/bi"
import {HiOutlineExclamationCircle} from "react-icons/hi"
function SingleRoute() {
    const params = useParams()
    const oneItem = PRODUCTS?.find(el => el.id === params.id)
    console.log(oneItem);
    
    if(!oneItem){
        return <div> <h2>Ma'lumot topilmadi</h2> </div>        
    }

  return (
    <div className='container'>
        
        <h1>{oneItem?.title}</h1>
        <div className="product__overall">
            <div className="product_pic_info">
                <div className="product__pic">
                    <img src={oneItem?.urls[0]} alt="" />
                </div>
                <div className="product__info">
                    {
                        oneItem?.desc?.map((info, ind)=><p key={ind}>{info}</p>)
                    }
                    <h5>Barcha xususiyatlarini ko'rish</h5>
                    <span><BiCheckShield className='guaranty'/> *** oy kafolat</span>
                </div>
            </div>
            <div className="product__sell">
                <div className="product__add">
                    <h2>{oneItem?.price} so'm</h2>
                    <p>Yetkazib berish to'g'risida ma'lumot: <HiOutlineExclamationCircle/></p>
                </div>
            </div>
        </div>
   
    </div>
  )
}

export default SingleRoute