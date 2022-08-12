import React, { createContext } from 'react'
import { useState } from 'react'

export const AppContext = createContext()  

export const AppContextProvider =({children})=>{

    const toggle = ()=>{
        setState(state === "dark"? "light": "dark")
    }

    const [state, setState] = useState("dark")

    return ( <AppContext.Provider value = {[state, toggle]}>
                  {children}
              </AppContext.Provider>
    )
}