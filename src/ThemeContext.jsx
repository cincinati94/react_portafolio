import React, { createContext, Fragment, useState,useEffect } from "react";
import './styles/style.scss'

export const ThemeContext = createContext({});


export const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState('dark-mode');
    
    const toggleTheme = () =>{
        setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode')
    }
    useEffect(()=>console.log(theme),[theme]);
    return <ThemeContext.Provider value={{theme,toggleTheme}}>
        <Fragment>
        {children}
        </Fragment>
    </ThemeContext.Provider>
}



