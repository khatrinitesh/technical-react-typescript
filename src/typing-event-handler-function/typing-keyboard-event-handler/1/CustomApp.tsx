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

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        console.log('key pressed',e.key);
        
    }
    return(
        <>
        <input type="text" onKeyDown={handleKeyDown}/>
        </>
    )
}

