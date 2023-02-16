import React, {useState} from 'react'
import "./CreateProduct.css"

function CreateProduct() {
  const {title, setTitle} = useState("")
  const {urls, setUrls} = useState("")
  const {desc, setDesc} = useState("")
  const {number, setNumber} = useState()

  return (
    <div className='create'>
        <h2>Create Product</h2>
        <form action="" className='create-from'>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='title' />
          <input value={number} onChange={e => setNumber(e.target.value)} type="number" placeholder='price' />
          <input value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='urls' />
          <input onChange={e => setDesc(e.target.value)} type="text" placeholder='desc' />
          <select name="" id="">
            <option value="">Tanlang</option>
            <option value="phone">phone</option>
            <option value="tv">tv</option>
            <option value="laptop">laptop</option>
          </select>
          <button type='submit'>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct