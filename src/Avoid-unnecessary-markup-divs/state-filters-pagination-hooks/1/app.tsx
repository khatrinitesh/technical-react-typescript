import React, { ChangeEvent, FormEvent, useState } from "react";

const CustomApp: React.FC = () => {
  return (
    <>
    <ItemList/>
    </>
  )
};

export default CustomApp;

interface Item{
    id:number;
    name:string;
}

export const items:Item[]=[
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
]


const ItemList: React.FC = () => {

    const [searchTerm,setSearchTerm] = useState<string>('');

    const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filterItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <h2>Search and Filter Items</h2>
     <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="type something..."/>
     {filterItems.length === 0 ? (
      <p>No items found</p>
     ) : (
        <ul>
            {filterItems.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
     )}
     
    </>
  );
};
