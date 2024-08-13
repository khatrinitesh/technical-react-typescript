import React, { createContext, useContext, useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <AuthProvider/>
    </>
  )
}

export default CustomApp

interface AuthContextType { 
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider:React.FC = ({children}) => {

   const [isAuth,setIsAuth] = useState<boolean>(false);

   const login = () => {
    setIsAuth(true);
   }

   const logout = () => {
    setIsAuth(false);
   }

    return(
        <>
        <isAuth.Provider value={{isAuth,login,logout}}>
            {children}
        </isAuth.Provider>
        </>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}