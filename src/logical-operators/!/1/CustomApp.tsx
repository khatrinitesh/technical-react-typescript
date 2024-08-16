import React, { useState } from "react";



const CustomApp:React.FC = () => {
    const [message,setMessage] = useState<string | undefined>(undefined)
    const displayName  = message || 'guest'
  return (
    <>
      <Example message={displayName}/>
    </>
  );
};

export default CustomApp;

interface MessageProps {
    message?: string;
}

const Example:React.FC<MessageProps> =({message}) => {
    return(
        <>
         {!message && <p>No message to display</p>}
         {message && <p>hi, {message}</p>}
        </>
    )
}
