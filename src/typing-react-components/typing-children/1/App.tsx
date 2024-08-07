import React, { useState } from 'react'

const data = [
    {name:'test1',age:34,location:'mumbai'},
    {name:'test1',age:34,location:'gukarat'},
    {name:'test1',age:34,location:'mumbai'},
    {name:'test1',age:34,location:'mumbai'},
    {name:'test1',age:34,location:'mumbai'},
]

const App:React.FC = () => {

  return (
    <>
    <Container>
        adsad
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
          <div className="container">
            {children}
          </div>
        </>
    )
}