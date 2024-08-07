import React from 'react';

interface User{
    id:number;
    name:string;
    email:string;
}

const App:React.FC = () => {
 // Typing an object
    const user:User = {
        id:1,
        name:'happy',
        email:'happy@gmail.com'
    }


  return (
    <div>
       {user.id} - {user.name} - {user.email}
    </div>
  )
}

export default App