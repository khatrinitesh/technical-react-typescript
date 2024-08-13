import React, { useState } from "react";
import { type } from './../../../intersection-&/1/CombinedButtonProps';

const CustomApp = () => {
  return (
    <>
      <Example />
    </>
  );
};

export default CustomApp;

const Example: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | "">("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name,value,type} = e.target;

    if(type === 'text'){
        setName(value)
    }
    else if(type === 'number'){
        setAge(value === '' ? '' : Number(value))
    }
  }

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault(); 
    console.log(`Name ${name} and Age ${age} years old.`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={age}
            id="name"
            name="age"
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
