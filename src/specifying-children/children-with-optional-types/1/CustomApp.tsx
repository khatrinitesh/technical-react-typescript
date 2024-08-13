import React, { useState } from "react";
import { type } from './../../../intersection-&/1/CombinedButtonProps';

const CustomApp = () => {
  return (
    <>
        <Example>
        <h1>Content inside the Example</h1>
      </Example>
      <Example /> {/* No content provided */}
    </>
  );
};

export default CustomApp;

interface ChildrenProps{
  children?: React.ReactNode; // children are optional
}

const Example: React.FC<ChildrenProps> = ({children}) => {


  return (
    <>
     <div className="card">
      {children || <p>No content provided</p>}  {/* Render all children */}
      </div>
    </>
  );
};
