import React from 'react'

interface UserProfileProps{
  name:string;
  age:number;
  email:string;
}


const data:UserProfileProps[] =  [
  {name:'test1',age:34,email:'xyz@gmail.com'},
  {name:'test2',age:34,email:'xyz@gmail.com'},
  {name:'test3',age:34,email:'xyz@gmail.com'},
  {name:'test4',age:34,email:'xyz@gmail.com'},
]


const App:React.FC = () => {

  return (
    <>
       {data.map((user, index) => (
        <UserProfile
          key={index} // Use a unique key if possible
          name={user.name}
          age={user.age}
          email={user.email}
        />
      ))}
    </>
  )
}

export default App

const UserProfile:React.FC<UserProfileProps> = ({name,age,email}) => {
  return(
    <>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </>
  )
}


