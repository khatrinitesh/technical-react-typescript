import React from 'react'

interface UserProfileProps{
    name:string;
    age?:number; // Optional prop
    email?:string; // Optional prop
}

const App:React.FC = () => {

  return (
    <>
     {/* UserProfile with all props */}
     <UserProfile 
        name="Alice"
        age={25}
        email="alice@example.com"
      />
<i></i>
        <hr/>
      {/* UserProfile without optional props */}
      <UserProfile 
        name="Bob"
      />
    </>
  )
}

export default App

const UserProfile:React.FC<UserProfileProps> = ({name,age,email}) => {
    return(
        <>
        <div className="user-profile">
            <h2>{name}</h2>
            {age && <p>Age: {age}</p>}         {/* Conditionally render age */}
            {email && <p>Email: {email}</p>}   {/* Conditionally render email */}
        </div>
        </>
    )
}
