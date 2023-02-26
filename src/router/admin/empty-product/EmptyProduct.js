import React, {useState} from 'react'
import "./EmptyProduct.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore"

// array = (javascript) = collection (database)

function EmptyProduct() {
  const [title, setTitle] = useState("")
  const [urls, setUrls] = useState("")
  const [category, setCategory] = useState("phone")
  const [loading, setLoading] = useState(false)

  const emptyColRef = collection(db, "empty")

  const emptyProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    let newEmpty = {
      title,
      urls: [urls],
    }
    await addDoc(emptyColRef, newEmpty)
      .then(res=> {
        console.log(res)
        setTitle("")
        setUrls("")
        setCategory("phone")
        setLoading(false)
        alert("Product has been created")
      })
      .catch(err=> console.log(err))
  }

  return (
    <div className='empty'>
        <h2>Empty Product</h2>
        <form onSubmit={emptyProduct} action="" className='empty-from'>
          <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='title' />
          <input required value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='urls' />
          <select value={category} onChange={e=> setCategory(e.target.value)} name="" id="">
            {/* <option value="">Tanlang</option> */}
            <option value="phone">phone</option>
            <option value="tv">tv</option>
            <option value="laptop">laptop</option>
          </select>
          <button disabled={loading} type='submit'>{loading ? "Loading..." : "Empty Product"}</button>
        </form>
    </div>
  )
}

export default EmptyProduct