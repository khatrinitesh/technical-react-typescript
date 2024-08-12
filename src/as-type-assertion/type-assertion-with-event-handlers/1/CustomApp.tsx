import React, { useEffect, useRef, useState } from 'react'



const CustomApp = () => {
  return (
    <>
    <MyForm/>
    </>
  )
}

export default CustomApp


const MyForm:React.FC = () => {

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        console.log([...formData.entries()]);
    }
    
    return(
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <input type="number" name="age" />
            <button type="submit">Submit</button>
            </form>
        </>
    )
}