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
    const [value,setValue] = useState<string | null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return(
        <>
        <input type="text" value={value || ''} onChange={handleChange} />
        <p>{value ? `current value ${value}` : 'no value entered'}</p>
        </>
    )
}