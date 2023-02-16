import React from 'react'
import CreateProduct from './create-product/CreateProduct'
import ManegeProduct from './manege-product/ManegeProduct'
import { Route, Routes, NavLink } from 'react-router-dom'
import "./Admin.css"
import { AiTwotoneHome, AiOutlineLineChart } from "react-icons/ai"
import { IoIosCreate } from "react-icons/io"
import { RiProductHuntLine, RiRadioButtonLine } from "react-icons/ri"
import { TbComponents } from "react-icons/tb"
import dragon from "../../assets/dragon.jfif"

function admin() {
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <hr />
        <div className="admin__names">
          <img src={dragon} alt="" />
          <div className="administrator__name">
            <h4>Gladiator</h4>
            <h5>Administrator</h5>
          </div>
        </div>
        <hr />
        <input placeholder='Search...' type="search" name="" id="" />
        <hr />
        <ul className='sidebar__menu'>
          <li><NavLink to={'/'}><AiTwotoneHome/> Home</NavLink></li>
          <li><NavLink to={'create-product'}><IoIosCreate/> Create Product</NavLink></li>
          <li><NavLink to={'manege-product'}><RiProductHuntLine/> Manage Product</NavLink></li>
        </ul>
      </div>
      <div className="admin__slew">
        <Routes>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='/manege-product' element={<ManegeProduct/>}/>
        </Routes>
      </div>
        
    </div>
  )
}

export default admin