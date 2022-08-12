import {CONST_SUM, CONST_MINUS,CONST_INCRE,CONST_DECRE,COUNT_MULT,COUNT_DEVIDE} from "./action.type"

export const Sum = (value)=>({
    type: CONST_SUM,
    payload: value
})

export const Minus = (value)=>({
    type: CONST_MINUS,
    payload: value
})

export const INCRE = (value) =>({
    type: CONST_INCRE,
    payload: value
})

export const DECRE = (value) =>({
    type: CONST_DECRE,
    payload: value
})

export const Mult = (value)=>({ 
    type: COUNT_MULT,
    payload: value
})

export const Devide = (value) =>({
    type: COUNT_DEVIDE,
    payload: value
})