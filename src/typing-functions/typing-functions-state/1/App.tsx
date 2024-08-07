import React, { useState, useEffect } from 'react';


const App = () => {

  return (
    <>
    <SquareCalculator/>
    </>
  )
}

export default App

const calculateSquare = (num:number):number => {
    return num * num
}

const SquareCalculator:React.FC = () => {

    const [number,setNumber] = useState<number>(0);
    const [result,setResult] = useState<number | null>(null);

    const handleCalculator = ():void => {
        setResult(calculateSquare(number))
    }
    return(
        <>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={handleCalculator}>Calculate Square</button>
        {result !== null && <p>Result: {result}</p>}
        </>
    )
}
