import React, {useState} from 'react'
import "./CreateProduct.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore"

// array = (javascript) = collection (database)

function CreateProduct() {
  const [title, setTitle] = useState("")
  const [urls, setUrls] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("phone")
  const [loading, setLoading] = useState(false)

  const productsColRef = collection(db, "products")

  const createProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    let newProduct = {
      title,
      price: +price,
      urls: [urls],
      desc
    }
    await addDoc(productsColRef, newProduct)
      .then(res=> {
        console.log(res)
        setTitle("")
        setPrice("")
        setUrls("")
        setDesc("")
        setCategory("phone")
        setLoading(false)
        alert("Product has been created")
      })
      .catch(err=> console.log(err))
  }

  return (
    <div className='create'>
        <h2>Create Product</h2>
        <form onSubmit={createProduct} action="" className='create-from'>
          <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='title' />
          <input required value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='price' />
          <input required value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='urls' />
          <input required value={desc} onChange={e => setDesc(e.target.value)} type="text" placeholder='desc' />
          <select value={category} onChange={e=> setCategory(e.target.value)} name="" id="">
            {/* <option value="">Tanlang</option> */}
            <option value="phone">phone</option>
            <option value="tv">tv</option>
            <option value="laptop">laptop</option>
          </select>
          <button disabled={loading} type='submit'>{loading ? "Loading..." : "Create Product"}</button>
        </form>
    </div>
  )
}

export default CreateProduct