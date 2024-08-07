import React from 'react';



const App = () => {
  return (
    <>
        <Greeting/>
    </>
  )
}

export default App

const greeting = (name:string,age:number) => {
    return `hello ${name}, you are ${age} years old.`
}

const Greeting:React.FC = () => {
    const message = greeting('xyz',34)
    return(
        <>
        {message}</>
    )
}