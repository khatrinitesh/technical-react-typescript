import React, { HTMLInputTypeAttribute, useState } from 'react';
import { type } from './../../../intersection-&/1/CombinedButtonProps';


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
        event.preventDefault();
        console.log('Form submitted with name:', name);
        
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

