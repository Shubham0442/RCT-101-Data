import React from 'react'
import { useEffect, useState } from 'react'


const TableItem = ({submit}) => {
  const [user, setfirst] = useState([]) 

  useEffect(() => {

    fetch("http://localhost:8050/datas")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        setfirst(res)
        
    })
 
}, [submit]) 

//  useEffect(() => {
   
  
//     fetch(`http://localhost:8050/datas/${id}`,{
//       method:"DELETE"
//     })
//     .then((res)=>{
//       return res.json()
//     })
//     .then((res)=>{
//       setfirst(res)
//     })
    
// //     handleDelete(id)

// }, [submit])

const handleDelete = (id) =>{
  // fetch(`http://localhost:8050/datas/${}`,{
  //   method:"DELETE"
  // })
  // .then((res)=>{
  //   return res.json()
  // })
  // .then((res)=>{
   //console.log(id)
   let deldata = user.filter((dl)=>dl.id!==id)
    setfirst(deldata)
  //});
  console.log(deldata)
  
  
}

  
  return (
    <div>
        <table style={{border: "1px solid black"}}>
            <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>salery</th>
                        <th>Material Status</th>
                        <th>Action</th>
                    </tr>
            </thead>
            <tbody>
              {
                user.map((elem)=>(
                  <tr key = {elem.id}>
                          <td>{elem.id}</td>
                          <td >{elem.username}</td>
                          <td >{elem.age}</td>
                          <td >{elem.address}</td>  
                          <td >{elem.department}</td>
                          <td >{elem.salery}</td>  
                          <td >{elem.married ? "Married": "Unmarried"}</td>
                          <td><button onClick={()=>handleDelete(elem.id)}>Dlt</button></td>
                 </tr>
                ))
              }   
            </tbody>
        </table>
    </div>
  )
}

export default TableItem