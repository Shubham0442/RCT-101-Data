import {GET_TODOS, UPDATE_TODO,ADD_TODO, COMPLETE_TODO, COUNTER_DECREMENT, COUNTER_INCREMENT, DELETE_TODO } from "./action.types"


export const counterInc = () =>({
     type: COUNTER_INCREMENT
})

export const counterDec = () =>({
    type: COUNTER_DECREMENT
})

export const todoAdd = (payload) =>({
    type: ADD_TODO,
    payload
})

export const todoComplete = (id) =>({
    type: COMPLETE_TODO,
    payload: id
})

export const todoUpdate = (payload) =>({
    type: UPDATE_TODO,
    payload
})

export const todoRemove = (id) =>({
    type: DELETE_TODO,
    payload: id
})

export const  getTodos =(id) =>({
    type: GET_TODOS,
    payload: id
})


