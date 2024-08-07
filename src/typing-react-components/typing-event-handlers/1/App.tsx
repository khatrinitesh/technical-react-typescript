import React, { useState } from 'react'

const App:React.FC = () => {

  return (
    <>
    <ButtonWithHandler/>
    </>
  )
}

export default App

const ButtonWithHandler:React.FC = () => {

    const [clickCount,setClickCount] = useState<number>(0);

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        setClickCount(prevCount => prevCount + 1)
        console.log('button clicked',e);
        
    }
    return(
        <>
        <p>Click count: {clickCount}</p>
        <button onClick={handleClick}>Click Me</button>
        </>
    )
}