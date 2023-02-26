import React from 'react'
import Category from '../../../components/category/Category'
import "./CategoryProduct.css"
function CategoryProduct() {

  return (
    <div className='category'>
        <Category admin={true}/>
    </div>
  )
}

export default CategoryProduct