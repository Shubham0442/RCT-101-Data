import React from 'react'
import {useState} from 'react'

const Form = ({submit, setsubmit}) => {

    const [info, setInfo] = useState({})
    const [user, setfirst] = useState([])
    
    const handleChange = (e) =>{

     let { checked, type, name, value } = e.target 
       
     if(type === "checkbox")
     {
         setInfo({...info,
             [name] : checked
         })
     }
     else{

        setInfo({...info,
            [name] : value
        })

     } 
    }


    const handleSubmit = (e) =>{
          e.preventDefault()
          alert("submitted")
          console.log(info)

          fetch("http://localhost:8050/datas",{
            method:"POST",
            body: JSON.stringify({
                username:info.username,
                age:info.age,
                address:info.address,
                department:info.department,
                salery:info.salery,
                married:info.isMarried
            }),
            headers:{
                "content-type":"application/json"
            },
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            //console.log(res)
            setfirst([...user],res)
            setsubmit(!submit)

        })

    }

   
   



  return (
    <div>
      <form >
          <div>
          <label>Name:</label>
           <input type="text" name = "username" placeholder='Enter name' value={info.username}  onChange={handleChange}/>
           <br />
          </div>
          <div>
          <label>Age:</label>
           <input type="number" name = "age" placeholder='Enter age' value={info.age} onChange={handleChange}/>
           <br />
          </div>

          <div>
          <label>Address:</label>
           <input type="text" name = "address" placeholder='Enter address' value={info.address}  onChange={handleChange}/>
           <br />
          </div>

          <div>
              <select name="department" onChange={handleChange}>
              <option value="">Select Department</option>
                  <option value="Inventory">Inventory</option>
                  <option value="Production">Production</option>
                  <option value="Quality">Quality</option>
                  <option value="Development">Development </option>
              </select>
          </div>
          <div>
          <label>Salery:</label>
           <input type="text" name = "salery" placeholder='Enter salery' value={info.salery} onChange={handleChange}/>
           <br />
          </div>

          <div>
           <input type="checkbox" name = "isMarried" checked={info.Married} onChange={handleChange}/>
           <label>:Is married</label>
           <br />
          </div>

        <button onClick={handleSubmit}> Submit</button>
        
      </form>

      
    </div>
  )
}

export default Form