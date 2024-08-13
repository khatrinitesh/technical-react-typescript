import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {

    const [name,setName] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Name :${name}`);
        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}