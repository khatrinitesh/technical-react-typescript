import React, { useEffect, useRef, useState } from 'react'

const CustomApp = () => {
    const strings = ['Apple', 'Banana', 'Cherry'];
  return (
    <>
    <List items={strings} renderItem={(item:string) => <span>{item}</span>}/>
    </>
  )
}

export default CustomApp

interface ListProps<T>{
    items:T[];
    renderItem:(item:T) => React.ReactNode;
}

const List = <T,>({items,renderItem}:ListProps<T>):JSX.Element => {
    return(
        <>
         <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
        </>
    )
} 
 