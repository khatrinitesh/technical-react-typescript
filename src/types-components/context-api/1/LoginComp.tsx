import React from 'react'
import { useAuth } from './CustomApp'

const LoginComp:React.FC = () => {
    const {isAuth,login,logout} = useAuth();
  return (
    <>
        <button onClick={isAuthenticated ? logout : login}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
    </>
  )
}

export default LoginComp