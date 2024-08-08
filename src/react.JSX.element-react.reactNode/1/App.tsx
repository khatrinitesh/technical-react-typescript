import React, { useState } from 'react'

const App = () => {
  return (
    <>

<Container>
      <h1>Hello World</h1>
      <p>This is a paragraph inside a container.</p>
      <button>Click Me</button>
      {/* You can also pass a string or number */}
      <p>{42}</p>
    </Container>
    </>
  )
}

export default App

interface ContainerProps{
    children:React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({children}) => {
    return(
        <>
          <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            {children}
            </div>
        </>
    )
}