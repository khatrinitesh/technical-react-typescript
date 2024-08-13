import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Counter/>
    </>
  )
}

export default CustomApp

const Counter:React.FC = () => {

    const [count,setCount] = useState<number>(0);

    const btnInc = () => {
        setCount(prevCount => prevCount + 1)
    }


    return(
        <>
        <p>{count}</p>
        <button onClick={btnInc}>Increment</button>
        </>
    )
}