import React, { useState, useEffect } from 'react';


const App = () => {

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        alert('Button was clicked!');
      };

  return (
    <>
      <Button onClick={handleButtonClick}/>
    </>
  )
}

export default App

interface BtnProps{
    onClick:(event:React.MouseEvent<HTMLButtonElement>) => void;
}


const Button:React.FC<BtnProps> = ({onClick}) => {
    return(
        <> 
        <button onClick={onClick}>Click me</button>
        </>
    )
}
