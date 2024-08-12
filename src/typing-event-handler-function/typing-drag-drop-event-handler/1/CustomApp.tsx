import React, { HTMLInputTypeAttribute, useState } from 'react';
import { type } from './../../../intersection-&/1/CombinedButtonProps';
import { ChangeEvent } from 'react';


const CustomApp = () => {
  return (
    <>
    <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {

    const handleDrop = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log('Dropped items',event.dataTransfer.items);
        
    }

    const handleDragOver = (event:React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }
    return(
        <>
        <div onDrop={handleDrop} onDragOver={handleDragOver} style={{ width: '200px', height: '200px', border: '2px dashed black' }}></div>
        </>
    )
}

