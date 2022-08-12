// import React from 'react'
// import { useState, useEffect } from 'react'


// const Test = ({...props}) => {
 
//     console.log({props})
    

//     const [user, setfirst] = useState([])
//     // const [age, setage] = useState("")
//     // const [address, setaddress] = useState("")
//     // const [dept, setfdept] = useState("")
//     // const [salary, setsalery] = useState("")
//     // const [married, setmarried] = useState("")
//      const saveData =()=>{

//         fetch(" http://localhost:3001/datas",{
//             method:"POST",
//             body: JSON.stringify({
//                 username:props.username,
//                 age:props.age,
//                 address:props.address,
//                 department:props.salery,
//                 salary:props.department,
//                 married:props.isMarried
//             }),
//             headers:{
//                 "content-type":"application/json"
//             },
//         })
//         .then((res)=>{
//             return res.json()
//         })
//         .then((res)=>{
//             //console.log(res)
//             setfirst([...user],res)
//         })


//      }




//    useEffect(() => {

//         fetch(" http://localhost:3001/datas")
//         .then((res)=>{
//             return res.json()
//         })
//         .then((res)=>{
//             //console.log(res)
//         })
     
//      return () => {
       
//      }
//    }, [])
   


  




//   return (

  

//     <div>
        
//     </div>
//   )
// }

// export default Test