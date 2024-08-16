import React, { useState } from "react";



const CustomApp:React.FC = () => {
    const [username,setUsername] = useState<string | undefined>(undefined)
    const displayName  = username || 'guest'
  return (
    <>
      <Example username={displayName}/>
    </>
  );
};

export default CustomApp;

interface UserProps  {
    username?: string;
}

const Example:React.FC<UserProps> =({username}) => {
    return(
        <>
        {username}
        </>
    )
}
