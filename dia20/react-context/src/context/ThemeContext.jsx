import { useState, createContext } from 'react'

export const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    
    const [theme,setTheme]=useState("oscuro")

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
