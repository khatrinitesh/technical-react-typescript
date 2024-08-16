import React from 'react'

const CustomApp = () => {
    const handleClick = () => {
        console.log('clicked')
    }
  return (
    <>
    <ButtonComp onClick={handleClick} disabled className='btn-secondary'>Click me</ButtonComp>
    </>
  )
}

export default CustomApp

interface ButtonProps{
    onClick:() => void;
    children:React.ReactNode;
    className?:string;
    disabled?:boolean;
}

const ButtonComp:React.FC<ButtonProps> = ({onClick,children,className,disabled=false}) => {
    return(
        <>
        <button onClick={onClick} className={className} disabled={disabled}>{children}</button>
        </>
    )
}
