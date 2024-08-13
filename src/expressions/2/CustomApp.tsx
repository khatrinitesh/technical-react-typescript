import React from 'react'

const data = [
    {id:1,name:'test1'},
    {id:2,name:'test2'},
    {id:3,name:'test3'},
]

const CustomApp = () => {
  return (
    <>
        <Example items={data}/>
    </>
  )
}

export default CustomApp
// mapping over arrays

interface Item{
    id:number;
    name:string;
}

interface Props{
    items:Item[];
}

const Example:React.FC<Props> = ({items}) => {
    return(
        <>
        <ul>
        {items.map((val) => (
            <li key={val.id}>
                {val.name}
            </li>
        ))}
        </ul>
        </>
    )
}