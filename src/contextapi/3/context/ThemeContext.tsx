import React, { createContext, useState } from 'react'

const ThemeContext = createContext('light');

const ThemeProvider:React.FC = ({children}) => {
    const [theme,setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
  return (
    <ThemeContext.Provider value={{toggleTheme,theme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export{ ThemeProvider,ThemeContext}