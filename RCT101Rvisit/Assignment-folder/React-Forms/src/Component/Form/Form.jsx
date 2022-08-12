import React,{useState} from 'react'




const Form = () => {

  const [form, setForm] = useState({
    username:"",
    gender:"male",
    role:"president",
    isMarried:""
  })

   const [display, setDisplay] = useState(false)

  const handleChange = (e) =>{
     const {name, value , type, checked} = e.target 
     
     const newVal = type === "checkbox" ? checked:value;
        setForm({
            ...form,
            [name]:newVal
          })
    
  }


const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form)
    setDisplay(!display)
}



  return (
    <div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input
                 type="text" 
                 placeholder='enter name' 
                 name ="username" 
                 value={form.username}
                 onChange={handleChange}/>
            </div>
            <div>
                <select name="gender"
                        onChange={handleChange}
                        //value={form.gender}
                        defaultValue={form.gender}
                        >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
                <select name="role"
                        onChange={handleChange}
                        defaultValue={form.role}
                        >
                    
                    <option value="president">President</option>
                    <option value="vice-president">Vice-President</option>
                </select>
            </div>
            <div>
                <label>Marital Status</label>
                <input 
                 type="checkbox" 
                 checked={form.isMarried}
                 onChange={handleChange}
                 name="isMarried"
                />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
       <hr />
       { display ? 
        <div>
            <div>
                <label>Name:{form.username}</label>
            </div>
            
            <div>
                <label>Gender: {form.gender}</label>
            </div>
            <div>
                <label>Role: {form.role}</label>
            </div>
            <div>
                <label>Marital Status: {form.isMarried ? "Married" : "Unmarried"}</label>
            </div>
        </div> : <div></div>
      }
    </div>
  )
}

export default Form