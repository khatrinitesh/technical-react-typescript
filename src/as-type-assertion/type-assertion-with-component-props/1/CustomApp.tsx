import React, { useEffect, useRef, useState } from 'react'



const CustomApp = () => {
    const handleClick = () => {
        console.log(('clicked'));
        
    } 
  return (
    <>
    <Button label="clicked" onClick={handleClick}/>
    </>
  )
}

export default CustomApp

interface ButtonProps{
    label:string;
    onClick:() => void;
}

const Button:React.FC<ButtonProps> = ({label,onClick}) => {
    return(
        <>
        <button onClick={onClick} >{label}</button>
        </>
    )
}