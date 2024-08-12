import React, { useEffect, useRef, useState } from 'react'

const user:UserWithoutSensitiveInfo ={
    id:1,
    name:'john'
}

const CustomApp = () => {
  return (
    <>
        <UserProfile user={user}/>
    </>
  )
}

export default CustomApp

interface User{
    id:number;
    name:string;
    email:string;
    age:number;
}

type UserWithoutSensitiveInfo = Omit<User , 'email' | 'age'>

const UserProfile:React.FC<{user:UserWithoutSensitiveInfo}> = ({user}) => {
    return(
        <> 
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        </>
    )
}