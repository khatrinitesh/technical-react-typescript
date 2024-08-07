import React from 'react'

const data = [
    {name:'test1',age:34},
    {name:'test1',age:34},
    {name:'test1',age:34},
    {name:'test1',age:34},
    {name:'test1',age:34},
]
const App:React.FC = () => {

  return (
    <>
        {data.map((person, index) => (
        <Greeting key={index} name={person.name} age={person.age} />
      ))}
    </>
  )
}

export default App

interface test{
    name:string;
    age:number;
}

const Greeting:React.FC<test> = ({name,age}) => {
    return(
        <>
         Name: <strong>{name}</strong>
        <br />
        <hr/>
        age: <strong>{age}</strong>
        </>
    )
}