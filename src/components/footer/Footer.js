import React from 'react'
import "./Footer.css"
import { AiFillApple } from "react-icons/ai"
import { FaAppStoreIos } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import { AiOutlineMail } from "react-icons/ai"

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__container">
                <div className="footer__bottom">
                    <div className="apps">
                        <div className="app">
                            <h3> <span><AiFillApple className='svg'/></span> App store</h3>
                        </div>
                        <div className="app">
                            <h3> <span><FaAppStoreIos className='svg'/></span> App Gallery</h3>
                        </div>
                        <div className="app">
                            <h3> <span><FaGooglePlay className='svg'/></span> Google Play</h3>
                        </div>
                    </div>
                    <div className="phone"></div>
                </div>
                <div className="footer__middle"></div>
                <div className="footer__top">
                    <div className="footer__texts">
                        <h1>gladiator</h1>
                        <h4>Телефон поддержки</h4>
                        <h3>+998 93 059 3505</h3>
                        <p> <span><GoLocation className='footer__local'/></span> Козитарнов, Ташкент</p>
                        <p> <span><AiOutlineMail className='footer__email'/></span> info@gladiator.uz</p>
                    </div>
                    <div className="texts">
                        <h1>Information</h1>
                        <p>О компании</p>
                        <p>Вакансии</p>
                        <p>Козитарнов, Ташкент</p>
                        <p>Условия рассрочки</p>
                        <p>Помощь</p>
                        <p>Доставка</p>
                    </div>
                    <div className="textss">
                        <p>Eco-friendly</p>
                        <p>Бонусы и акции</p>
                        <p>Оплата и доставка</p>
                        <p>Продавайте на olcha</p>
                        <p>Сервисные центры</p>
                    </div>
                    <div className="card"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer