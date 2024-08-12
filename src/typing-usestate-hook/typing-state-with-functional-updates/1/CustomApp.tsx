import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {
  const [count,setCount] = useState<number>(0);
  const handleInc = () => {
    setCount(prevCount => prevCount + 1)
  }

    return(
        <>
         {count}
         <br />
         <button onClick={handleInc}>Increment</button>
        </>
    )
}