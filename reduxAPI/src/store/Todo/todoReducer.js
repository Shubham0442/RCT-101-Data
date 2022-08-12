import { ADD_TODO, DELETE_TODO, GET_TODO, SINGLE_TODO } from "./action.type"

const initialState = {
    todos:[],
    remove:[]
}


export const todoReducer = (state = initialState, { type, payload }) =>{
        
    switch (type)
    {
        case GET_TODO:{
            return{
                ...state,
                todos: payload
            }
        }
        case ADD_TODO:{

            return {
                ...state,
                todos: [
                    ...state.todos, 
                        payload 
                ]

            }
        } 

        case SINGLE_TODO:{
            return{
                ...state,
               todos:payload
                
               
            }
            
        }

        case DELETE_TODO:{
            return{
                ...state,
                remove : state.remove.filter((elem)=>elem.id !== payload)
            }
        }

        
        default:{
            return state
        }
    }
}