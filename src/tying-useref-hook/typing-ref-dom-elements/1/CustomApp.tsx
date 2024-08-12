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
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if(inputRef.current){
                inputRef.current.focus()
            }
        },[])
  
    return(
        <>
        <input type="text" ref={inputRef} placeholder='Focus me on mount' />
        </>
    )
}