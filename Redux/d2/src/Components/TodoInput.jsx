import React,{useState, useRef} from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addingTodo, getTodo } from '../TodoRedux/action'

const TodoInput = () => {

    const [ text, setText ] = useState("")
    const ref = useRef()

    const dispatch = useDispatch()

    const handleAdd = ()=>{

        let text = ref.current.value 

        addingTodo(dispatch,{
            title: text,
            status : false
        }) 
    }

    useEffect(()=>{
      getTodo(dispatch)
    },[])


  return (
    <div>
        <input
            ref={ref} 
            type="text" 
            placeholder='Add todo here' 
            // value = {text}  
            // onChange = {(e)=> setText(e.target.value)}
            />
        <button onClick = {handleAdd}>ADD</button>
    </div>
  )
}

export default TodoInput