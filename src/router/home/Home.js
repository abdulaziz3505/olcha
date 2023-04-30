import React, { useEffect, useState } from 'react'
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
import { db } from "../../server"
import { collection, getDocs } from "firebase/firestore"
import { doc, deleteDoc} from 'firebase/firestore'
import { useParams } from 'react-router-dom'

function Home({admin}) {
  const [refresh, setRefresh] = useState(false)

  let nma = [
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

  const [data, setData] = useState([])

  const emptyColRef = collection(db, "empty")

  useEffect(()=>{
    const getEmpty = async () =>{
      const empty = await getDocs(emptyColRef)
      setData(empty.docs.map((pro)=> ({ ...pro.data(), id: pro.id}) ))
    }
    getEmpty()
  }, [])

  console.log(data);
  const deleCategory = async(id)=>{
    await deleteDoc(doc(db, "empty", id))
      .then(res=> {
        console.log(res)
        setRefresh(!refresh)
      })
      .catch(res=> console.log(res))
  }


  return (
    <div className='container'>
      <div className="home">
        <Banner/>
        <br />
          {/* <Category/> */}
          <Products/>
       

        


      </div>
    </div>
  )
}

export default Home