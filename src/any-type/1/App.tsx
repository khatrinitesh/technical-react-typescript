import React from 'react'


const App:React.FC = () => {

    // Sample data with different structures
  const stringData = "Hello, World!";
  const objectData = { name: 'Alice', age: 30, email: 'alice@example.com' };
  const arrayData = [1, 2, 3, 4, 5];

  return (
    <>
    <DynamicComp data={stringData}/>
    <DynamicComp data={objectData}/>
    <DynamicComp data={arrayData}/>
    </>
  )
}

export default App

interface DynamicProps{
    data:any;
}

const DynamicComp:React.FC<DynamicProps> = ({data}) => {
    return(
        <>
         <h2>Dynamic Data:</h2>
         <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}