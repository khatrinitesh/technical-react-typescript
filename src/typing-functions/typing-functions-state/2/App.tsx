import React, { useState } from 'react'

const App = () => {
  return (
    <div>
        <Example/>
    </div>
  )
}

export default App

const calc = (num:number) => {
    return num * num 
}

const Example:React.FC = () => {
    const [num,setNum] = useState<number>(0);
    const [result,setResult] = useState<number | null>(null);

    const handleCalc=() => {
        setResult(calc(num))
    }

    return(
        <>
         <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
         <button onClick={handleCalc}>Click</button>
         {result !== null && <p>{result}</p>}
        </>
    )
}