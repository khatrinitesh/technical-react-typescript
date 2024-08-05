import React, { ChangeEvent, FormEvent, useState } from "react";

const CustomApp:React.FC = () => {
const handleClick = () => {
    console.log('clicked')
}
    
    return(
        <>
        <Button label="click" onClick={handleClick}/>
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
        <button onClick={onClick}>{label}</button>
        </>
    )
}