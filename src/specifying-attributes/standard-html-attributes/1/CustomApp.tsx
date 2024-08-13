import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example   />
    </>
  )
}

export default CustomApp


const Example:React.FC = () => {

    const [value,setValue] = useState<string>('')
    return(
        <>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} aria-label='Text input field' maxLength={5} placeholder='enter text here'/>
        </>
    )
}