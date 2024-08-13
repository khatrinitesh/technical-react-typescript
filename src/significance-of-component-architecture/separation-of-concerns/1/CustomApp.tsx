import React, { useState } from "react";

const CustomApp = () => {
    const handleSubmit= () => {
        console.log('hi')
    }
  return (
    <>
      <InputComp label="Name" value="" onChange={(e) => console.log(e.target.value)}/>
      <SubmitButton onClick={handleSubmit} className="bg-black text-white">Click me</SubmitButton>
    </>
  );
};

export default CustomApp;

interface InputFieldProps {
    label:string;
    value: string;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComp: React.FC<InputFieldProps > = ({label,value,onChange}) => {


  return (
    <>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />

    </>
  );
};

interface SubmitProps{
    onClick:() => void;
}

const SubmitButton:React.FC<SubmitProps> = ({children,className,onClick}) => {
    return(
        <>
        <button onClick={onClick} className={className}>{children}</button>
        </>
    )
}