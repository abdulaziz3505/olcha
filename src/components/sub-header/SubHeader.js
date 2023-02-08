import React from 'react'
import "./SubHeader.css"

function SubHeader() {
  return (
    <div className='sub__header'>
      <div className="container">
        <div className="sub__container">
          <div>
            <button className='btn'>0% Muddatli to'lov</button>
            <button className='btn'>Chegirmalar</button>
            <span>Sayt xaritasi</span>
          </div>
          <div>
            <a href="tel:998930593505">+998 93 059 3505</a>
            <button className='btn'>Olcha sotib olish</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default SubHeader