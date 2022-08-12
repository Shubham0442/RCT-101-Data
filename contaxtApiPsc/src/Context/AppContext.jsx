import React, { useReducer } from "react"; 
import { createContext, useState} from "react"; 
export const AppContaxt = createContext(); 

const initialState = {
     
    isAuth: false,
    token: null

}

const reduce = (state, action) => {
         
    switch(action.type){
       
        case "Login_Success":{
            return {
                ...state,
                isAuth: true,
                token: action.token
            }
        }
        case "Logout_Success":{
            return {
                ...state,
                isAuth: false,
                token: null
            }
        }
        case "Login_Fail":{
            return {
                ...state,
                isAuth: false,
                token: null
            }
        }
        default:{
            return state
        }
        

    }


}
 const AppContextProvider = ({children})=>{

    //const [isAuth, setIsAuth] = useState(false)
    const [state, dispatch] = useReducer(reduce, initialState);

    // const toggleAuth = () =>{

    //     setIsAuth(!isAuth)
    // }

    return <AppContaxt.Provider value={[state, dispatch]}>
          {children}
         </AppContaxt.Provider>
}

export default AppContextProvider