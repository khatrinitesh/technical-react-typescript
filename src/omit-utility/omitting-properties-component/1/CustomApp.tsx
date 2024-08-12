import React, { useEffect, useRef, useState } from 'react'


const user:Omit<User,'email' | 'address'>   = { 
    id:2,
    name:'jane'
}

const CustomApp = () => {
  return (
    <>
        <UserForm {...user}/>
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

type UserFormProps = Omit<User, 'email' | 'address'>

const UserForm:React.FC<UserFormProps> = ({id,name}) => {
    return(
        <> 
         <form>
            <input type="text" name="id" value={id} readOnly />
            <input type="text" name="name" value={name} />
        </form>
        </>
    )
}