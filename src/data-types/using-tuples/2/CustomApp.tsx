import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <User />
    </>
  );
};

export default CustomApp;

interface User {
  name: string;
  age: number;
  status: boolean;
}

const User: React.FC = () => {
  const users: UserType[] = [
    { name: "nitesh", age: 32, status: true },
    { name: "john", age: 25, status: false },
    { name: "jane", age: 29, status: true },
  ];

  return (
    <>
      {users.map((user, index) => (
        <div key={index} className="user-card">
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>
            Status:{" "}    
            {user.status ? (
              <span className="text-green-600">done</span>
            ) : (
              <span className="text-red-600">pending</span>
            )}
          </p>
        </div>
      ))}
    </>
  );
};
