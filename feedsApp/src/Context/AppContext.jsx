import React from "react"; 
import { createContext } from "react";

export const AppContext = Ewacr.createContext() 

export default function  AppContextProvider({children}){

    return <AppContext.Provider>{children}</AppContext.Provider>
    
}