import React from 'react'
import "./Sidebar.css"
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOG_IN } from '../context/action/actionType';
import { useState } from 'react';
import { FiX } from "react-icons/fi"


function Sidebar() {


    const [ show, setShow] = useState(false)
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState(false)
    const auth = useSelector(s => s.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    document.body.style.overflow = show ? "hidden" : "auto"

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
    
    
    
      const {pathname} = useLocation()
      if(pathname.includes("admin")){
        return <></>
      }



  return (
    <div className='sidebar'>
        <div className=" side container">
            <div className="side__img"></div>
            <div className="side__text">
                <div className="side__add">
                    <h3>Shahar:Toshkent</h3>
                    <div className="iiimmg">
                        <h4>4.72/5</h4>
                    </div>
                </div>
                <div className="side__tel">
                    <div className="ppphone">
                        <h3>1174</h3>
                    </div>
                    <div className="texttt">
                        <h3>40 daqiqada tekin yetkazib beramiz yoki pitsa bepul</h3>
                    </div>
                    
                        
                </div>
                <div className="side__halal">
                    <div className="halllaa"></div>
                </div>
                    <div className="text">
                    <h3 onClick={checkAdmin}>Kirish</h3>
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
</div>
  )
}

export default Sidebar