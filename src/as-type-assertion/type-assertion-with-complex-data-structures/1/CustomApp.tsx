import React, { useEffect, useRef, useState } from 'react'

const CustomApp = () => {
  return (
    <>
    <UserList/>
    </>
  )
}

export default CustomApp

interface User{
    id:number;
    name:string;
}

const UserList:React.FC = () => {

    const [users,setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            setUsers(data as User[])
        }

        fetchUsers();
    },[]);
    return(
        <>
         <ul>
            {users.map((val) => (
                <li key={val.id}>
                    {val.name} - {val.username}
                </li>
            ))}
         </ul>
        </>
    )
}