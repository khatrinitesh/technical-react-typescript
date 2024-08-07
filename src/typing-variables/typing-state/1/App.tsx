import React, { useState } from 'react';

interface CounterState  {
    count:number;
    name:string;
}

const App:React.FC = () => {
    const [state,setState] = useState<CounterState>({count:0,name:''})

    const increment = () => {
        setState((prevState) => ({
            ...prevState,
            count:prevState.count  + 1
        }))
    }

    const updateName = (event:React.ChangeEvent<HTMLInputElement>) => {
        setState(prevState => ({...prevState,name:event.target.value}))
    }

  return (
    <div>
        <p>Count: {state.count}</p>
        <p>Name: {state.name}</p>
        <input type="text" value={state.name} onChange={updateName} />
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
