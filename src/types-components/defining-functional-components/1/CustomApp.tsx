import React, { useState } from "react";

const CustomApp = () => {
    
  return (
    <>
    <Example message="Hello message"/>
    </>
  );
};

export default CustomApp;

const Example:React.FC =({message}) => {
  return(
    <>
    <h1>{message}</h1>
    </>
  )
}
