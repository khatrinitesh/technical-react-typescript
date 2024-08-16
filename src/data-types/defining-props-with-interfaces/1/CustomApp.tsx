import React from 'react'

const data = [
    { name: 'test1', age: 32, isActive: true },
    { name: 'test2', age: 42, isActive: true },
    { name: 'test3', age: 42, isActive: false },
    { name: 'test4', age: 22, isActive: false },
]
const CustomApp = () => {
  return (
    <>
        {data.map((val,index) => (
            <User key={index} name={val.name} age={val.age} isActive={val.isActive}/>
        ))}
    </>
  )
}

export default CustomApp

interface UserCardProps{
    nane:string;
    age:number;
    isActive:boolean;
}

const User:React.FC<UserCardProps>  =({age,name,isActive}) => {
    return(
        <>
        <p>
            Name {name}
        </p>
        <p>
            Age: {age}
        </p>
        <p>
        Status: {isActive ? (<><span className='text-green-500 font-bold'>Done</span></>) : (<><span className='text-red-500 font-bold'>Pending</span></>)}
        </p>
        </>
    )
}