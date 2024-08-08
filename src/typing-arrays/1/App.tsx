import React, { useState } from 'react'

const sampleUsers: User[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];

const App = () => {
  return (
    <div>
        <UserList users={sampleUsers}/>
    </div>
  )
}

export default App


interface User{
    name:string;
    age:number;
}

interface UserListProps{
    item:User[]
}

const UserList:React.FC<UserListProps> = ({users}) => {
    return(
        <>
        <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
        </>
    )
}