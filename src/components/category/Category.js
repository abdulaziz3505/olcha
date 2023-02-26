import React, {useState, useEffect } from 'react'
import "./Category.css"
import { db } from "../../server"
import { collection, getDocs } from "firebase/firestore"
import { doc, deleteDoc} from 'firebase/firestore'

function Category({admin}) {
  const [refresh, setRefresh] = useState(false)
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
       <div className="maps__container">
          {
            data?.map((item, inx)=> <div key={inx} className="map">
              <img src={item?.urls[0]} width="100" alt="" />
              <h4>{item?.text}</h4>
              {
                admin ? <button onClick={()=> deleCategory(item.id)}>Delete</button>
                  :
                <button className='btn'>Add</button>
              }
            </div>)
          }
            
        </div>
  )
}

export default Category