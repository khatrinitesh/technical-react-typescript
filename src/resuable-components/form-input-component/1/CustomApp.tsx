import React, { useState } from 'react'

const CustomApp = () => {
    const [text, setText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };
  return (
    <>
     <FieldInputComp type="text" value={text} onChange={handleChange} placeholder="Enter text"/>
     <FieldInputComp type="password" value="" onChange={() => {}} placeholder="Enter password"/>
    </>
  )
}

export default CustomApp

interface FieldInputProps{
    type?:string;
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?:string;
    className?:string;
}

const FieldInputComp:React.FC<FieldInputProps> = ({type='text',value,onChange,placeholder,className}) => {
    return(
        <>
         <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={className} />
        </>
    )
}
