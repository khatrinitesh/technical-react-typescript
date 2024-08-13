import React, { useState } from "react";
import { type } from './../../../intersection-&/1/CombinedButtonProps';

const CustomApp = () => {
  return (
    <>
      <Example>
        <h1>Card Title</h1>
      </Example>
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
     <div className="card">
      {children}
      </div>
    </>
  );
};
