
import {GET_TODOS, ADD_TODO, UPDATE_TODO, COMPLETE_TODO, DELETE_TODO} from "./action.types"

export const todoReducer = (state = {todos:[]}, {type, payload}) =>{

    switch (type){

        case GET_TODOS:{

            return{
                ...state,
                todos:[
                    ...state.todos,
                    {   
                        ...payload,
                    
                    }
                ]
            }
        }

        case ADD_TODO:{
            
            return {
                ...state,
               todos: [
                   ...state.todos,
                   {
                       ...payload,
                       id: state.todos.length
                   }
               ]
            }
        }
        case COMPLETE_TODO:{
            return {
                ...state
            }
        }
        case UPDATE_TODO:{
            return {...state}
        }
        case DELETE_TODO:{
           return {...state}
        }
        default:{
          return state
        }
    }
}