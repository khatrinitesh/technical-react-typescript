import React, { createContext, useState, ReactNode, FC } from 'react';

interface AuthContextType {
    isAuthenticated:boolean;
    login:() => void;
    logout:() => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState<boolean>(false);

    const login =() => setIsAuthenticated(true);
    const logout =() => setIsAuthenticated(false);
    return(
        <>
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

const useAuth = () => {
    const context = React.useContext(AuthContext)
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}

export {AuthProvider,useAuth}