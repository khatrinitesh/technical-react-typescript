import React, { useState } from 'react'

const App = () => {

    const handleClick = () => {
        alert('submit')
    }
  return (
    <>
    <BtnCompo onClick={handleClick} label="Submit"/>
    </>
  )
}

export default App

interface BtnProps{
    label?:string;
    onClick?:() => void;
}

const BtnCompo:React.FC<BtnProps> = ({label='click me',onClick = () => alert('button clicked')}) => {
    return(
        <>
        <button onClick={onClick}>{label}</button>
        </>
    )
}