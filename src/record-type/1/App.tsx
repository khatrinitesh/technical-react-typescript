import React, { useState } from 'react'

// Sample dictionary of categories
const categories: CategoryDictionary = {
    [Category.Fruits]: [
      { name: 'Apple', price: 1.2 },
      { name: 'Banana', price: 0.8 },
    ],
    [Category.Vegetables]: [
      { name: 'Carrot', price: 0.5 },
      { name: 'Broccoli', price: 1.0 },
    ],
  };

const App = () => {
  return (
    <>
    <h1>Record Type with Enums Example</h1>
    <CategoryList categories={categories} />
    </>
  )
}

export default App

enum Category{
    Fruits = 'Fruits',
    Vegetables = 'Vegetables',
}

interface Item{
    name:string;
    price:number;
}

type CategoryDictionary = Record<Category,Item[]>;

interface CategoryListProps{
    categories:CategoryDictionary
}
const CategoryList:React.FC<CategoryListProps> = ({categories}) => {
    return(
        <>
          <h2>Category List</h2>
            {Object.entries(categories).map(([category, items]) => (
                <div key={category}>
                <h3>{category}</h3>
                <ul>
                    {items.map((item, index) => (
                    <li key={index}>
                        <strong>{item.name}</strong>: ${item.price.toFixed(2)}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
        </>
    )
}