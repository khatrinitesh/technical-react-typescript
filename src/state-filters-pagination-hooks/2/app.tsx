import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
    <ItemList/></>
  )
}

export default CustomApp

interface ItemProps{
    id:number;
    name:string;
}

const items:ItemProps[] = [
    {id:1,name:'test1'},
    {id:2,name:'test2'},
    {id:3,name:'test3'},
    {id:4,name:'test4'},
]

const ItemList:React.FC = () => {
    const [searchTerm,setSearchTerm] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filterItem = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return(
        <>
         <input type="text" value={searchTerm} onChange={handleChange} />
         {filterItem.length === 0 ?  (
            <p>no items found</p>
         ) : (
            <>
            <ul>
                {filterItem.map((val) => (
                    <li key={val.id}>{val.name}</li>
                ))}
            </ul>
            </>
         )}
        </>
    )
}