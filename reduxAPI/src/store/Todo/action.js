import axios from 'axios';


import { ADD_TODO, DELETE_TODO, GET_TODO, SINGLE_TODO } from "./action.type";


// export const addTodo = (payload) =>({
    
//     type: ADD_TODO,
//     payload
// }) 

export const addTodo = (dispatch, payload) =>{

    axios.post("http://localhost:8080/todos", payload)
    .then((res)=>{
        dispatch({type: ADD_TODO, payload: res.data})
    })
}

export const getTodo = (dispatch) =>{
    
    axios.get("http://localhost:8080/todos")
        .then((res)=>{
            //console.log(res)
            dispatch({type: GET_TODO, payload: res.data})
        })
}

export const constdeleteTodo = (id) =>({
    
    type: DELETE_TODO,
    payload:id 
}) 

export const singleTodo = (dispatch,id) =>{

    axios.get(`http://localhost:8080/todos/${id}`)
        .then((res)=>{
            //console.log(res)
            dispatch({type: SINGLE_TODO, payload: res.data})
        })
    
}

export const deleteTodo = (dispatch,id) =>{

    axios.delete(`http://localhost:8080/todos/${id}`)
        .then((res)=>{
            //console.log(res)
            dispatch({type: DELETE_TODO, payload: res.data})
        })
    
}