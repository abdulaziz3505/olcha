import React from 'react'
import Empty from '../../components/empty/Empty'
import "./Like.css"
import parashut from "../../assets/parashut.png"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Like() {
  const like = useSelector(s => s.heart)
  console.log(like)
  return (
    <div className='container like'>
      {
        like.length === 0 ?
        <Empty url={parashut} text="Sevimli mahsulotlar yo'q"/>
        :
        <div className="">
          <div className="like__text">
                </div>
            {
              like?.map((item, inx)=> <div key={inx} className="favourites">
                
                  <div className="like__phones">
                    <img src={item.urls[0]} alt="" />
                    <div className="like__name">
                      <h3>{item?.title}</h3>
                      <div className="like__id">
                        <h4>{item?.id}</h4>
                      </div>
                    </div>
                    <div className="like__narxi">
                      <del>{item?.singcard[0]} </del>
                      <h4>{item?.price} so'm</h4>
                    </div>
                    <div className="like__buttons">
                      <button className='like__atn'>Add to Cart</button>
                      <button className='like__gtn'>Delete</button>
                    </div>
                  </div>
                </div>)
            }
        </div>
        
        
        
      }
        
    </div>

  )
}

export default Like