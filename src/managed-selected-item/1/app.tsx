import React, { ChangeEvent, FormEvent, useState } from "react";

const CustomApp: React.FC = () => {
  return (
    <>
    <ItemList/>
    </>
  )
};

export default CustomApp;

export interface Item {
    id: number;
    name: string;
  }

  export const items:Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]

const ItemList: React.FC = () => {

    // State to hold the selected item ID
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    // Handler to set the selected item ID
    const handleItemClick = (id: number) => {
        setSelectedItemId(id);
    };

  return (
    <>
     <h2>Item List</h2>
     <ul>
        {items.map(item => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            style={{ 
              cursor: 'pointer', 
              fontWeight: item.id === selectedItemId ? 'bold' : 'normal' ,
              color:item.id === selectedItemId ? 'green' : 'red'
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {selectedItemId !== null && (
        <p>Selected Item ID: {selectedItemId}</p>
      )}
    </>
  );
};
