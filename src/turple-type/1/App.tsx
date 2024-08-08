import React, { useState } from 'react'


type DataType = [string,number,boolean]

interface DisplayProps{
    data:DataType;
}

const tupleData:[string,number,boolean] = ['test',35,true];

const App = () => {
  return (
    <div>
        <DataDisplay data={tupleData}/>
    </div>
  )
}

export default App

const DataDisplay:React.FC<DisplayProps> = ({data}) => {
    const [name,age,isActive] = data
    return(
        <>
            <h2>Data Display</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        </>
    )
}
