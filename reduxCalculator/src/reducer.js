
import {CONST_SUM,CONST_MINUS,CONST_INCRE,CONST_DECRE,COUNT_MULT,COUNT_DEVIDE} from "./action.type"


export const reducer = (state, {type, payload} )=>{

    //console.log(type)

    switch(type){

        case CONST_SUM: {
            state.count = state.count + payload;
            return{...state}
        }
        case CONST_MINUS: {
            state.count = state.count - payload ;
            return{...state}
        }

        case CONST_INCRE: {
            state.count = Number(state.count) + Number(payload);
            //state.count =  state.value
            return{...state}
        }
        case CONST_DECRE: {
            state.count = Number(state.count) - Number(payload);
            //state.count =  state.value
            return{...state}
        }
        case COUNT_MULT: {    
            state.count = Number(state.count) * Number(payload);
            //state.count =  state.value 
            return{...state}
        }
        case COUNT_DEVIDE: {    
            state.count = Number(state.count) / Number(payload);
            //state.count =  state.value
            return{...state}
        }
        default:{
            return state
        }
    }
   

}