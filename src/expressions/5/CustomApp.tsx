import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example />
    </>
  )
}

export default CustomApp


// Using Expressions in Event Handlers
const Example:React.FC = () => {

    const [isOn,setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn)
    }
   
    return(
        <>
          {isOn ? 'on' : 'off'}
          <button onClick={toggle}>Toggle</button>
        </>
    )
}