import React, { useEffect, useRef, useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {

  type Color = 'red' | 'green' | 'orange' | 'purple'

  const color:Color = 'orange';

  let message:string;

    switch(color){
        case 'red' : message = 'the color is red';
        break;
        case 'green' : message = 'the color is green';
        break;
        case 'orange' : message = 'the color is orange';
        break;
        case 'purple' : message = 'the color is purple';
        break;
        default: message = 'unknown color';
        break;
    }

    return <p style={{color}}>{message}</p>
}