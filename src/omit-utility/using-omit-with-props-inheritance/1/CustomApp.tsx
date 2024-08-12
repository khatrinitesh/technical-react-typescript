import React, { useEffect, useRef, useState } from 'react'


// Example usage
const user: UserEditProps = {
    id: 3
    // name is optional here
  };

const CustomApp = () => {
  return (
    <>
        <PrimaryButton label="click me" onClick={() => alert('Clicked!')}/>
    </>
  )
}

export default CustomApp

interface  ButtonProps{
    label:string;
    onClick:() => void;
    disabled?:boolean;
}

const BaseButton:React.FC<ButtonProps> = ({label,onClick,disabled}) => {
    return(
        <>
        <button onClick={onClick} disabled={disabled}>{label}</button>
        </>
    )
}

type PrimaryButtonProps = Omit<ButtonProps,'disabled'>;

const PrimaryButton:React.FC<PrimaryButtonProps> = (props) => {
    return <BaseButton {...props}/>
}