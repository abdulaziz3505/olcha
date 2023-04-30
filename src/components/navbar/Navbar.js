import React from 'react'
import "./Navbar.css"
import { BiPencil } from "react-icons/bi"
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {
  const card = useSelector(e => e.card)

  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }



  let data = [
    {
      text: "Kombo"
    },
    {
      text: "Pitsa"
    },
    {
      text: "Gazaklar"
    },
    {
      text: "Ichimliklar"
    },
    {
      text: "Salatlar"
    },
    {
      text: "Desertlar"
    },
    {
      text: "Souslar"
    },
  ]

  




  console.log(card);



  return (
    <div className='container'>
         <div className="nav">
          <div className="nav__text">
            <div className="nav__yetkizib">
              <div className="nav__be">
                <h3>Yetkazib berish</h3>
              </div>
              <div className="nav__ba">
                <h4>Olib ketish</h4>
              </div>
              
            </div>
            <div className="nav__manzil">
              <div className="manzil__text">
                <h4>Yetkazib berish manzilini tanlang</h4>
              </div>
              <div className="manzil__icon">
                <span> <BiPencil/> </span>
              </div>
            </div>
          </div>
          <div className="nav__card">
            <div className="menu__text">
              {
                data?.map((item, inx)=> 
                <div key={inx} className="menu"> 
                <h3>{item?.text}</h3> </div>)
              }

               
            </div>
            <Link to={"/card"} className="menu__cart">
              <h3>Savatcha |</h3>
            <span className='nav__circle'>{card?.length}</span>
            </Link>
          </div>
         </div>
    </div>
  )
}

export default Navbar