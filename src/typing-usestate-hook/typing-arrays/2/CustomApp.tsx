import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {

    const [list,setList] = useState<string[]>([]);

    const addItem = (item:string) => {
        setList(prevItem => [...prevItem,item])
    }
    return(
        <>
        <button onClick={() => addItem('new item')}>Add item</button>
        <ul>
            {list.map((item,index) => (
            <li key={index}>{item}</li>
         ))}
        </ul>
        </>
    )
}