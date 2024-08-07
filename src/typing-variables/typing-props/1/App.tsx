import React from 'react';

interface GreetingProps {
    name:string;
    age:number;
}

const App:React.FC = () => {


  return (
    <div>
       <Greeting name="xyz" age={34}/>
    </div>
  )
}

export default App

const Greeting:React.FC<GreetingProps> = ({name,age}) => {
    return(
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        </>
    )
}