
import { ADD_TODO, GET_TODO, DETETE_TODO, TOGGLE_STATUS } from "./actionTypes"; 

const initState = {
    todos: []
}

export const todoReducer = (state = initState , { type, payload})=>{

    switch(type){

        case GET_TODO: {
            return {
                  ...state,
                  todos: payload
            }
        }

        case ADD_TODO: {
            return {
                  ...state,
                  todos: [
                    ...state.todos,
                    payload
                  ]
            }
        }

        case DETETE_TODO: {
            return {
                  ...state,
                  todos: payload
            }
        }
        case TOGGLE_STATUS: {
            return {
                  ...state,
                  todos: payload
            }
        }

        


        default : return state
    }
}