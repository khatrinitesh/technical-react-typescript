import React from 'react'

const App:React.FC = () => {

    const count:number = 10;
    const name:string = 'hello world';
    const isActive:boolean = true;

  return (
    <div>
        Count: {count}
        <br />
        Name: {name}
        <br />
        isActive: {isActive ? 'yes' : 'no'}
    </div>
  )
}

export default App