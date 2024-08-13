import React, { useState } from "react";
import { type } from './../../../intersection-&/1/CombinedButtonProps';

const CustomApp = () => {
  return (
    <>
      <Example>
        <h1>Section Title</h1>
        <p>This is a paragraph inside the section.</p>
        <button>Click Me</button>
      </Example>
    </>
  );
};

export default CustomApp;

interface ChildrenProps{
  children: React.ReactNode;
}

const Example: React.FC<ChildrenProps> = ({children}) => {

  

  return (
    <>
     <div className="card">
      {children}  {/* Render all children */}
      </div>
    </>
  );
};
