import React, { useState } from 'react'


const App:React.FC = () => {

    const stringValue: string = "Hello, TypeScript!";
    const numberValue:number = 555

   
  return (
    <>
    <h1>Union Type Example</h1>
    <Display value={stringValue}/>
    <Display value={numberValue}/>
    </>
  )
}


export default App

type DisplayName = string | number;

interface DisplayProps {
    value:DisplayName;
}

const Display:React.FC<DisplayProps> = ({value}) => {

    return(
        <>
        {typeof value === 'string' ? (<><p>string value: {value}</p></>) : (<><p>Number value: {value}</p></>)}
        </>
    )
}