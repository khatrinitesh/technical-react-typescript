import React, { useState } from "react";



const CustomApp:React.FC = () => {
     // Local state to manage the count
     const [count,setCount] = useState<number>(0)

     // Decrement handler
     const handleDec = () => {
         setCount((prevCount) => prevCount - 1)
     }
     // Increment handler
     const handleInc = () => {
         setCount((prevCount) => prevCount + 1)
     }
    return(
        <>
        <Counter countNum={count} handleInc={handleInc}
      handleDec={handleDec} />
        </>
    )
}

export default CustomApp

interface CardProps {
    countNum: number;
    handleInc: () => void; 
    handleDec: () => void; 
  }
const Counter: React.FC<CardProps> = ({countNum,handleInc,handleDec}) => {
   
  return (
    <>
    {countNum}
    <button onClick={handleDec}>-</button>
    <button onClick={handleInc}>+</button>
    </>
  )
};


