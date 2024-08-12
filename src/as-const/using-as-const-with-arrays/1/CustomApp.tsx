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

    const colors = ['red','blue','green'] as const;
      
    return(
        <>
        {colors.map((val,index) => (
            <li key={index}>{val}</li>
        ))}
        </>
    )
}