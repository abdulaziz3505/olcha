import React from 'react'
import "./Footer.css"
import { useLocation } from 'react-router-dom'

function Footer() {

    const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }

  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__texts">
                <div className="footer__abouts">
                    <h2>Bellissimo Pizza</h2>
                    <li>Biz haqimizda</li>
                    <li>Ommaviy ofert</li>
                    <li>Maxfiylik siyosati</li>
                    <li>Halol sertifikati</li>
                    <li>Restoranlar</li>
                </div>
                <div className="footer__aboutss">
                    <h2>To'lov usuli</h2>
                    <div className="payment">
                         <div className="footer__payments"></div>
                    <div className="footer__paymentss"></div>
                    </div>
                   
                    
                </div>
                <div className="footer__abouts">
                    <h2>Hamkorlik</h2>
                    <li>Franchayzi</li>
                    <li>Bizning ish o'rinlarimiz</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer