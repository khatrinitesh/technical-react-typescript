import React, { useState } from "react";
import { type } from './../../../intersection-&/1/CombinedButtonProps';

const CustomApp = () => {
  return (
    <>
      <Example>
        {(data) => (
            <div>
                <h1>{data}</h1>
                <p>Additional Content</p>
            </div>
        )}
      </Example>
    </>
  );
};

export default CustomApp;

interface ChildrenProps{
  children:(data:string) => React.ReactNode;
}

const Example: React.FC<ChildrenProps> = ({children}) => {

    const data = "HeadTitle"
  

  return (
    <>
     <div className="card">
      {children(data)}
      </div>
    </>
  );
};
