import React, { useState } from 'react'

const App = () => {
  return (
    <>
    <Header>
    <h1>Welcome to My Site</h1>
    <p>Subtitle or description here.</p>
    </Header>
    </>
  )
}

export default App

interface HeaderProps{
    children:React.ReactElement | React.ReactElement[];
}

const Header:React.FC<HeaderProps> = ({children}) => {
    return(
        <>
        <header style={{backgroundColor:'#f8f9fa',padding:'10px'}}>
            {children}
        </header>
        </>
    )
}