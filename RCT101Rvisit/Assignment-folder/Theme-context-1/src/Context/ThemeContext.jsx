import React, { createContext } from 'react'
import {dark, light} from "./styles"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

    

  return (
    <div>
        <ThemeContext.Provider value = {{dark, light}}>
           {children}
        </ThemeContext.Provider>
    </div>
  )
}

 