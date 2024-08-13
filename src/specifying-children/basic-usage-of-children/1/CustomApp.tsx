import React, { useState } from "react";
import { type } from './../../../intersection-&/1/CombinedButtonProps';

const CustomApp = () => {
  return (
    <>
      <Example>Et labore tempor dolor ipsum cillum.</Example>
    </>
  );
};

export default CustomApp;

interface ChildrenProps{
  children:React.ReactNode; // children prop can be any react node
}

const Example: React.FC<ChildrenProps> = ({children}) => {
  

  return (
    <>
      {children}
    </>
  );
};
