import React, { useState } from "react";



const CustomApp:React.FC = () => {

    const isAdmin = true; // or false, depending on your logic
    const isUser = true;  // or false, depending on your logic
  return (
    <>
    <Example  isAdmin={isAdmin} isUser={isUser}/>
    </>
  );
};

export default CustomApp;

interface ComplexProps {
    isAdmin:boolean;
    isUser:boolean;
}

const Example:React.FC<ComplexProps> =({isAdmin,isUser}) => {
    return(
        <>
         {isUser ? (
            isAdmin ? (
                <p>welcome admin</p>
            )
            :
            (
                <p>Welcome user</p>
            )
         ):(
            <p>Please login</p>
         )}
        </>
    )
}
