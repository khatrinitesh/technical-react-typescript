import React, { useState } from 'react'

const App = () => {
  return (
    <div>
        <StateComp/>
    </div>
  )
}

export default App

type StateValue = string | number;

const StateComp:React.FC = () => {
    // Initialize state with a union type
    const [value,setValue] = useState<StateValue>('InitialValue')
    const handleChange = () => {
        setValue(preVal => (typeof preVal === 'string' ?  100 : 'new string value'))
    }
    return(
        <>
          <p>Current Value: {typeof value === 'string' ? value : value.toString()}</p>
          <button onClick={handleChange}>Change Value</button>
        </>
    )
}