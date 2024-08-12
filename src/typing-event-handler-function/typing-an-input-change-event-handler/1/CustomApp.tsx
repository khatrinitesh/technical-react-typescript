import React, { useState } from 'react';


const CustomApp = () => {
  return (
    <>
    <TextInput/>
    </>
  )
}

export default CustomApp

const TextInput:React.FC = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      console.log(value);
      
    };
    return(
        <>
        <input type="text" value={value} onChange={handleChange} />
        </>
    )
}