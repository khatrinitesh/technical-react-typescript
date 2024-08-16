import React, { useState } from "react";



const CustomApp:React.FC<GreetingProps> = ({isLoggedIn}) => {
  return (
    <>
      <Example isLoggedIn={true}/>
    </>
  );
};

export default CustomApp;

interface GreetingProps {
    isLoggedIn: boolean;
}

const Example:React.FC<GreetingProps> =({isLoggedIn}) => {
    return(
        <>
        {isLoggedIn && <p>happy world</p>}
        </>
    )
}
