
import axios from "axios"

import {
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT
} from "./auth.type" 

export const loginApi = (creds) => (dispatch) =>{

    dispatch({type:LOGIN_LOADING});

    axios.post("https://reqres.in/api/login", creds
    ).then((res)=>{
        dispatch({type:LOGIN_SUCCESS, payload: res.data});
    }).catch(()=>{
        dispatch({type:LOGIN_ERROR});

    })
    
    
}

export const logoutApi = () => ({type: LOGOUT})