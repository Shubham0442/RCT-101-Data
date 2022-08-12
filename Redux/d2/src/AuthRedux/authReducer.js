import { LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./authActionTypes"
import { loadData, saveData} from "../Utilitis/localStoragee"


const authState = {
    auth : loadData("myAuth") || {
        isAuth : false,
        token: null
    }
}

export const authReducer = ( state = authState, { type, payload })=>{

    switch(type){
        case LOGIN_SUCCESS:{
            let newAuth = payload 
            saveData("myAuth", { isAuth: true, token: newAuth})
            return {
                ...state,
                auth: {
                    ...state.auth,
                    isAuth: true,
                    token: payload
                }
            }
        }

        case LOGOUT_SUCCESS:{

            saveData("myAuth", { isAuth: false, token: null})
            return {
                ...state,
                auth: {
                    ...state.auth,
                    isAuth: false,
                    token: null
                }
            }
        }
        default : return state
    }
}