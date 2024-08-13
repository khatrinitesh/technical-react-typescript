import React, { useState } from 'react'

const CustomApp = () => {

    const handleClick = () => {
        alert('hi')
    }
  return (
    <>
        <Example onClick={handleClick} style={{backgroundColor:'red',color:'white'}}  />
    </>
  )
}


export default CustomApp

interface ButtonProps{
    onClick:() => void;
    disabled?:boolean; // Optional prop
    style?:React.CSSProperties; // for inline styles
}


const Example:React.FC<ButtonProps> = ({onClick,disabled,style}) => {

    return(
        <>
          <button onClick={onClick} disabled={disabled} style={style}>Click me</button>
        </>
    )
}