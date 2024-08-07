import React, { createContext, useContext, useState } from 'react'



const App:React.FC = () => {

  return (
    <>
    <ThemeProvider>
      <ThemeComponent/>
    </ThemeProvider>
    </>
  )
}

export default App

interface ThemeContextType{
  theme:string;
  setTheme:(theme:string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider:React.FC = ({children}) => {
  const [theme,setTheme] = useState<string>('light')
  return(
    <ThemeContext.Provider value={{theme,setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = ():ThemeContextType => {
  const context = useContext(ThemeContext);
  if(context === undefined){
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context;
}

const ThemeComponent:React.FC = () => {
  const {theme,setTheme} = useTheme();

  return(
    <>
    <p>Current theme: {theme}</p>
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</button>
    </>
  )
}

