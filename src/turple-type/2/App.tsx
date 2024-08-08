import React from 'react'

const infoData:[string,number?,boolean?] = ['test1',34]


const App = () => {
  return (
    <div>
        <DisplayComp data={infoData}/>
    </div>
  )
}

export default App

type DataType = [string,number?,boolean?]

interface DisplayProps{
    data:DataType 
}

const DisplayComp:React.FC = ({data}) => {
    const [name,age,isActive] = data;
    return(
        <>
        <h2>Info Display</h2>
        <p>Name: {name}</p>
        {age !== undefined && <p>Age: {age}</p>}
        {isActive !== undefined && <p>Status: {isActive ? 'Active' : 'Inactive'}</p>}
        </>
    )
}