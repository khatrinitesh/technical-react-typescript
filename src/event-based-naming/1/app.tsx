import React, { ChangeEvent, FormEvent, useState } from "react";

const CustomApp:React.FC = () => {
    const [inputVal,setInputVal] = useState<string>('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value)
    }
    
    return(
        <>
        <Input value={inputVal} onChange={handleChange}/>
        <br />
        {inputVal}
        </>
    )
}

export default CustomApp


interface InputProps {
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void; // Event-based name for input change handler
}
const Input:React.FC<InputProps> = ({value,onChange}) => {
    return(
        <>
        <input type='text' onChange={onChange} placeholder="type something..."/>
        </>
    )
}