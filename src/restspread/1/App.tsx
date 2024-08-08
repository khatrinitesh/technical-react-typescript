import React, { useState } from 'react'

const App = () => {

    const handleClick = () => {
        alert('submit')
    }
  return (
    <>
     <BtnCompo
        label="Click Me"
        onClick={() => alert('Button clicked!')}
        style={{ backgroundColor: 'blue', color: 'white' }}
      />
    </>
  )
}

export default App

interface BtnProps{
    label?:string;
    onClick?:() => void;
    style?: React.CSSProperties;
}

const BtnCompo:React.FC<BtnProps> = ({label,...rest}) => {
    return(
        <>
        <button {...rest}>
        {label} 
        </button>
        </>
    )
}