

import axios from "axios";
import { ADD_TODO, GET_TODO, DETETE_TODO, TOGGLE_STATUS } from "./actionTypes"; 

export const getTodo = (dispatch)=>{

    axios.get(`http://localhost:8080/todoData`)
    .then((res)=>{
        //console.log(res.data)
        dispatch({type: GET_TODO, payload: res.data})
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const addingTodo = (dispatch, payload) =>{
    axios.post(`http://localhost:8080/todoData`,payload)
    .then((res)=>{
       // console.log(res.data)
        dispatch({type: ADD_TODO, payload: res.data})
    })
    .catch((error)=>{
        console.log(error)
    })

}

export const deletingTodo = (dispatch, id) =>{
     
    axios.delete(`http://localhost:8080/todoData/${id}`)
    .then(()=>{
        axios.get(`http://localhost:8080/todoData`)
        .then((res)=>{
           dispatch({type:DETETE_TODO, payload:res.data})
        }) 
    })
}

export const updataTodo = (dispatch, id, newStatus)=>{
    
    axios.patch(`http://localhost:8080/todoData/${id}`, newStatus)
    .then(()=>{
        //console.log(res)
        axios.get(`http://localhost:8080/todoData`)
        .then((res)=>{
           dispatch({type:TOGGLE_STATUS, payload:res.data})
        })
        
    })
}