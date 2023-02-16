import React, {useState} from 'react'
import "./Navbar.css"
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import {BiBarChart} from "react-icons/bi"
import {SlBasket} from "react-icons/sl"
import {BsPerson} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { FiX } from "react-icons/fi"
import { useSelector } from 'react-redux'
import { useLocation } from "react-router-dom"

const NAVBAR_DATA = [
  {
    text: "Taqqoslash",
    icons: <BiBarChart/>
  },
  {
    text: "Sevimlilar",
    icons: <AiOutlineHeart/>
  },
  {
    text: "Savatcha",
    icons: <SlBasket/>
  },
  {
    text: "Taqqoslash",
    icons: <BsPerson/>
  }
]

function Navbar() {
  const [ show, setShow] = useState(false)
  document.body.style.overflow = show ? "hidden" : "auto"

  const cart = useSelector(s => s.cart)
  console.log(cart);

  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }

  return (
    <>
      <div className='nav__container' >
      <div className='container '>
        <div className='navbar'>
          <Link to={"/"}
         // contentEditable={true}
           className='nav__logo'>gladiator</Link>
          <button className='btn nav__katalog'>
            <AiOutlineMenu/>
            <span>Katalog</span>
          </button>
          <div className="nav__search">
            <input type="text" placeholder='Qidirish...' />
            <button><FiSearch/></button>
          </div>
          <div className="nav__items">
            <Link to={"/taq"} className="nav__item">
            <BiBarChart/>
            <p>Taqqoslash</p>
           </Link>
            <Link to={"/like"} className="nav__item">
            <AiOutlineHeart/>
            <p>Sevimlilar</p>
           </Link>
            <Link to={"/cart"} className="nav__item">
            <SlBasket/>
            <p>Savatcha</p>
            <span className='nav__circle'>{cart?.length}</span>
           </Link>
            <div onClick={()=> setShow(true)} className="nav__item">
            <BsPerson/>
            <p>Kirish</p>
           </div>
          </div>
          
        </div>
     </div>
    </div>

    {
      show ? <>
     <div onClick={()=> setShow(false)} className="nav__shadow"></div>
     <div onClick={()=> setShow(false)} className="nav__login">
      <FiX className='nav__close'/>
      <h2>Войти или создать профиль</h2>
      <br />
      <br />
      <br />
      <h3>Номер телефона</h3>
      <div className="nav__inp">
       <input type="text" placeholder='+998'/>
      </div>
    </div>
    </>: 
    <></>
    }
    
    </>
  )
}

export default Navbar