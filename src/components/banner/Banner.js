import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from 'react-router-dom';

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Banner() {
  
  
  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }
  return (
    <div className='container banner'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F7690ddfe-e1f1-4234-93aa-e01f78509941_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F8f913c6f-6ca6-4c84-a76b-e3155cad6fa4_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fdc00d3a5-d682-4111-8fe5-cdba9bbf3f9f_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ffadbc348-c936-474a-9091-48b0134a4bab_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Banner