import React from 'react';
import { CombinedButtonProps } from './CombinedButtonProps';
import { FaBeer, FaEraser } from 'react-icons/fa'; // Example icon from react-icons
import  "../style.css";

const CustomApp = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
  return (
    <>
        <Button onClick={handleClick}  className="primary-button"  icon={<FaBeer />}>Click 1</Button>
    
    <Button 
        onClick={handleClick} 
        className="secondary-button"   icon={<FaEraser/>}
        disabled >
        Disabled Button
      </Button>
    </>
  )
}

export default CustomApp

const Button:React.FC<CombinedButtonProps> = ({onClick,children,className,disabled=false,icon}) => {
    return(
        <>
         <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={{ padding: '10px', fontSize: '16px', display: 'flex', alignItems: 'center' }}
    >
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      {children}
    </button>
        </>
    )
}