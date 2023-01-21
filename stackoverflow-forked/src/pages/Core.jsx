import React, { useState } from "react";
import done from '../components/api'
import Stack1 from "../components/Kesyon";
// import Filter from "./Filte";



export default function Core(){

  const [data, setData] = useState(done)

  const [fiterDone,setfiterDone] = useState("All")
  const[triyevale,settriyevale] = useState('Recent')
  
  const  efaseData = (id) => {
      const newKesyon = data.filter((el)=> el.id !== id)
      setData(newKesyon)
  }

  let fiterApi = data.filter((el)=>{
      if (fiterDone ==='Active') 
        return el.status==='active'
      else if( fiterDone === 'Inactive')
        return el.status==='deleted'
      else
        return el
  }
  )

   
    return(
    <div>    
      <div>
     <select name="filter" id="" onChange={(event)=>{
      setfiterDone(event.target.value)
    }}>
       <option value="All">All</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
     </select>
  
    <select name="sort" id="" onChange={(event)=>{
      settriyevale(event.target.value)
    }}>
      <option value="Recent">Recent</option>
       <option value="Popular">Popular</option>
       <option value="Hot">Hot</option>
    </select>
    <button className="btn btn-outline-success" type="submit" onClick={(element)=>{element.preventDefault()
    }
  }>
      Search
    </button>
</div> 
      {
        fiterApi.map(kesyon => <Stack1 kesyon={kesyon}  efase={efaseData}/>)
      }
      
    </div>
  )
}





























