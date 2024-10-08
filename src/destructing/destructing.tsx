import React, { useEffect, useState } from 'react';

const Destructing = () => {
    // Destructuring state and setState function
  const [count, setCount] = useState<number>(0);
  return (
    <>
       <p>Count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Destructing;

interface MyComponentProps{
    title:string;
    count:number;
}

const Example:React.FC = ({title,count}) => {

    const user = {
        name: 'John Doe',
        age: 30,
        address: {
          city: 'New York',
          zip: 10001
        }
      };
      const { name, address: { city } } = user;
      

    return(
        <>
        <h1>{title}</h1>
        <p>Count: {count}</p>
        </>
    )
}
