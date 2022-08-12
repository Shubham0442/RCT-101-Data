import {COUNTER_DECREMENT, COUNTER_INCREMENT} from "./action.types"

export const reducer = (state = {count:0},{type, payload}) =>{

   switch(type){
      
    case COUNTER_INCREMENT:{
        state.count++
        return {...state}
    }

    case COUNTER_DECREMENT:{
        state.count--
        return {...state}
    }

    default :{
        return state
    }

     
   }

}