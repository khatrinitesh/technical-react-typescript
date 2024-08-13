import React, { createContext, useContext, useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <ToggleComp/>
    </>
  )
}

export default CustomApp

function UseToggle(initialValue:boolean=false):[boolean,() => void]{
    const [val,setVal] = useState<boolean>(initialValue);

    const toggle = () => setVal(!val)

    return [val,toggle]
}

const ToggleComp:React.FC = () => {
    const [isToggle,toggle] = UseToggle();
    return(
        <>
        <p>{isToggle ? 'toggleon' : 'toggleoff'}</p>
        <button onClick={toggle}>toggle</button>
        </>
    )
}