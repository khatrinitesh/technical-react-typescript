import React from 'react'

const CustomApp = () => {
    const handleClick= () => {
        console.log('clicked');
        
    }
  return (
    <>
    <Button label="Click" onClick={handleClick}/>
    </>
  )
}

export default CustomApp

interface BtnProps{
    label:string;
    onClick:() => void;
}

const Button:React.FC<BtnProps> = ({label,onClick}) => {
    return(
        <>
        <button onClick={onClick}>{label}</button>
        </>
    )
}