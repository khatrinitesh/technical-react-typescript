import React, { useState } from "react";
import { type } from './../../../intersection-&/1/CombinedButtonProps';

const CustomApp = () => {
    const handleClick= () => {
        console.log('hi')
    }
  return (
    <>
      <Example onClick={handleClick} className='bg-black text-white'>click me</Example>
    </>
  );
};

export default CustomApp;

interface BtnProps{
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const Example: React.FC<BtnProps> = ({children,className,onClick}) => {


  return (
    <>
     <button onClick={onClick} className={className}>{children}</button>
    </>
  );
};
