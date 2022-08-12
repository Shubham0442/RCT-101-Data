import React from 'react'
import {useState} from 'react'
const Form = () => {
   
    const [form, setform] = useState({
        
        // username:"",
        // email: "",
        // passward: "",
        // age: 0,
        // isIndian: false,
        // resume:"",
        

    });

   const handleChange = (e) =>{
     let  {checked, type, name,value, files} = e.target;
    
     if(type === checked)
     {
        setform({
            ...form,
            [name]: checked
        })
     }
     else if(type === files){
         
        setform({
            ...form,
            [name]: files
        })
     }
     else{
        setform({
            ...form,
            [name]: value
        })
     }
     
       
   } 

   const handleSubmit = (e) =>{
      e.preventDefault()
   }

  return (
    <div>Form
        <div>
            <form >
                <div>
                    <label>Name</label>
                    <input type="text" name='username' placeholder='type name' value={form.username} onChange={handleChange}/>
                    <br />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name='email' placeholder='type email' value={form.email} onChange={handleChange}/>
                    <br />
                </div>
                <div>
                    <label>Passward</label>
                    <input type="passward" name='passward' placeholder='type passward' value={form.passward} onChange={handleChange}/>
                    <br />
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" name='age' placeholder='type age' value={form.age} onChange={handleChange}/>
                    <br />
                </div>
                <div>
                    <input type="checkbox" name='isIndian' onChange={handleChange}/>
                    <label>: Is Indian</label>
                    <br />
                </div>
                <div>
                    <div>
                        <input type="radio" name='gender'  value="male" onChange={handleChange}/>
                        <label>: Male</label>
                        <br />
                    </div>
                    <div>
                        <input type="radio" name='gender'  value="female" onChange={handleChange}/>
                        <label>: Female</label>
                        <br />
                    </div>
                </div>
                <div>
                    <label>City :</label>
                    <select name="selectCity" onChange={handleChange}>
                        <option value="">Select City</option>
                        <option value="pune">Pune</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                    </select>
                    <br />
                </div>
                
                <div>
                    <label>User Resume</label>
                    <input type="file" name='resume'  value={form.resume} onChange={handleChange}/>
                    <br />
                </div>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form