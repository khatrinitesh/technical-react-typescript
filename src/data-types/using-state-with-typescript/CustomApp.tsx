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
    const [count,setCount] = useState<number>(0);
    const btnInc = () => {
        setCount(prevC => prevC + 1)
    }
    return(
        <>
        <p>
            {count}
        </p>
        <button onClick={btnInc}>Increment</button>
        
        </>
    )
}