import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <User/>
    </>
  )
}

export default CustomApp

const User:React.FC  =() => {

    const handleClick = (e:React.ChangeEvent<HTMLButtonElement>) => {
        console.log('Button clicked',e);
        
    }
   
    return(
        <>
        <button onClick={handleClick}>Click me</button>
        
        </>
    )
}