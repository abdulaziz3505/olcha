import React from 'react'
import Banner from '../../components/banner/Banner'
import "./Home.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"
import img7 from "../../assets/img7.png"
import img8 from "../../assets/img8.png"
import img9 from "../../assets/img9.png"
import img10 from "../../assets/img10.png"
import img11 from "../../assets/img11.png"
import img12 from "../../assets/img12.png"
import img13 from "../../assets/img13.png"
import img14 from "../../assets/img14.png"
import Category from '../../components/category/Category'
import Products from '../../components/products/Products'

function Home() {
  let data = [
    {
      image: img1,
      text: "Смартфоны"
    },
    {
      image: img2,
      text: "Женская одежда"
    },
    {
      image: img3,
      text: "Диски для авто"
    },
    {
      image: img4,
      text: "Для мужчин"
    },
    {
      image: img5,
      text: "Телевизор"
    },
    {
      image: img6,
      text: "Игры"
    },
    {
      image: img7,
      text: "Минимойки"
    },
    {
      image: img8,
      text: "Для геймеров"
    },
    {
      image: img9,
      text: "Детская одежда"
    },
    {
      image: img10,
      text: "Фара"
    },
    {
      image: img11,
      text: "Макияж"
    },
    {
      image: img12,
      text: "Ноутбук"
    },
    {
      image: img13,
      text: "Деткие коляски"
    },
    {
      image: img14,
      text: "Руль для авто"
    },
  ]
  return (
    <div className='container'>
      <div className="home">
        <Banner/>
          <Category/>
        <div className="maps__container">
          {
            data?.map((item, inx)=> <div key={inx} className="map">
              <img src={item?.image} alt="" />
              <h4>{item?.text}</h4>
            </div>)
          }
            
        </div>
        <Products/>

        <div className="text__container">
          <h1>Интернет магазин - Olcha удобный гипермаркет для покупок</h1>
          <p>Комфортную жизнь любого человека и удобный быт невозможно представить без современной техники. Рабочие и личные вопросы - в смартфоне, любимые фильмы и сериалы – телевизор, уборка – пылесос, готовка – плита, духовка и множество более мелких, но не менее полезных девайсов. Кроме того, технологии развиваются, а поэтому электроника требует регулярного обновления, хочется испытать новые модели или попросту не хватает мощности имеющихся девайсов. В связи с этим полезно иметь надежное место для покупки бытовой техники. Если Вы пока такового для себя не нашли, мы приглашаем на несколько минут задержаться на нашем сайте. Уверяем, Вы убедитесь, что не зря потратили свое время.</p>

          <h2>Где покупать технику в Узбекистане?</h2>
        </div>


      </div>
    </div>
  )
}

export default Home