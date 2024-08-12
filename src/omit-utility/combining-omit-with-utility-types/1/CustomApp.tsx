import React, { useEffect, useRef, useState } from 'react'


// Example usage
const user: UserEditProps = {
    id: 3
    // name is optional here
  };

const CustomApp = () => {
  return (
    <>
        <UserEditForm {...user}/>
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

type UserEditProps = Partial<Omit<User, 'email' | 'address'>>;

const UserEditForm:React.FC<UserEditProps> = ({id,name}) => {
    return(
        <> 
         <form>
            <input type="text" name="id" value={id ?? ''} readOnly />
            <input type="text" name="name" value={name ?? ''} />
        </form>
        </>
    )
}