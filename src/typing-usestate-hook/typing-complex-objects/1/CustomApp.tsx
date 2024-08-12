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

interface User{
    name:string;
    age:number;
}

const Example:React.FC = () => {

    const [user,setUser] = useState<User>({name:'',age:''});

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevUser => ({
            ...prevUser,
            name:e.target.value
        }))
    }

    const handleAgeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevUser => ({
            ...prevUser,
            age:e.target.value
        }))
    }
    return(
        <>
        <input type="text" value={user.name} onChange={handleNameChange} placeholder="Name" />
        <input type="number" value={user.age} onChange={handleAgeChange} placeholder="Age" />
        <p>{`Name: ${user.name}, Age: ${user.age}`}</p>
        </>
    )
}

