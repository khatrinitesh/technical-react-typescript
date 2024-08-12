import React, { HTMLInputTypeAttribute, useState } from 'react';
import { type } from './../../../intersection-&/1/CombinedButtonProps';
import { ChangeEvent } from 'react';


const CustomApp = () => {
  return (
    <>
    <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {

    const [value,setValue] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return(
        <>
        <input type="text" value={value} onChange={handleChange} />
        <br />
        {value}
        </>
    )
}

