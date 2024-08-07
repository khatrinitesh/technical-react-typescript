import React, { useState } from 'react'

const data = [
    {name:'test1',age:34,location:'mumbai'},
    {name:'test1',age:34,location:'gukarat'},
    {name:'test1',age:34,location:'mumbai'},
    {name:'test1',age:34,location:'mumbai'},
    {name:'test1',age:34,location:'mumbai'},
]

const App:React.FC = () => {

  return (
    <>
    {data.map((val,index) => (
        <UserCard key={index} name={val.name} age={val.age} location={val.location}/>
    ))}
    </>
  )
}

export default App

interface UserCardProps{
    name:string;
    age:number;
    location?:string;  // Optional prop
}

const UserCard:React.FC<UserCardProps> = ({name,age,location}) => {
    return(
        <>
          <div className="user-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            {location && <p>Location: {location}</p>} {/* Conditionally render location */}
          </div>
        </>
    )
}