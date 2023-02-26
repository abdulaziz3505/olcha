import React, {useState} from 'react'
import "./Navbar.css"
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import {BiBarChart} from "react-icons/bi"
import {SlBasket} from "react-icons/sl"
import {BsPerson} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { FiX } from "react-icons/fi"
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOG_IN } from '../../context/action/actionType';


function Navbar() {
  const [ show, setShow] = useState(false)
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(s => s.auth)
  
  document.body.style.overflow = show ? "hidden" : "auto"
  const cart = useSelector(e => e.cart)


  const register = ()=>{
    if( username === "gladiator" && password === "0987654321" ){
     dispatch({type: LOG_IN, payload: {username, password}})
     navigate("/admin")
    }else{
      console.log("error");
      setError(true)
    }
  }

  const defaultCase = ()=>{
    setShow(false)
    setUsername("")
    setPassword("")
    setError(false)
  }

  const checkAdmin = ()=>{
    if(auth){
      return navigate("/admin")
    }
    setShow(true)
  }


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
            <div onClick={checkAdmin} className="nav__item">
            <BsPerson/>
            <p>Kirish</p>
           </div>
          </div>
          
        </div>
     </div>
    </div>

    {
      show ? <>
     <div onClick={defaultCase} className="nav__shadow"></div>
     <div className="nav__login">
      <FiX onClick={defaultCase}  className='nav__close'/>
      <h2>Войти или создать профиль</h2>
      <span 
        className='error' 
        style={{opacity: error ? 1 : 0}}
        >Username yoki Parol xato</span>
      <br />
      <br />
      <br />
      <h3>Номер телефона</h3>
      <div className="nav__inp">
       <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='username'/>
       <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password'/>
       <br />
       <button onClick={register}>LOGIN</button>
      </div>
    </div>
    </>: 
    <></>
    }
    
    </>
  )
}

export default Navbar