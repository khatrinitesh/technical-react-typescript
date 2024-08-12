import React, { useEffect, useRef, useState } from 'react'



const CustomApp = () => {
  return (
    <>
    <BaseButton/>
    </>
  )
}

export default CustomApp


const BaseButton:React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        (inputRef.current as HTMLInputElement).focus();
    }
    return(
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus input</button>
        </>
    )
}
