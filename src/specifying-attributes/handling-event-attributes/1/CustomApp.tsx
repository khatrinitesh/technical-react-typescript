import React, { useState } from 'react'

const CustomApp = () => {

  return (
    <>
        <Example  />
    </>
  )
}


export default CustomApp



const Example:React.FC = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
    

    return(
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}