import React, { useState } from "react";

const CustomApp = () => {
    const data = [
        {name: 'John Doe', address: {street: '123 Main St', city: 'Mumbai'}},
        {name: 'Jane Smith', address: {street: '456 Elm St', city: 'Mumbai'}},
        {name: 'Alice Johnson', address: {street: '789 Oak St', city: 'Mumbai'}}
    ];
  return (
    <>
      {data.map((val,index) => (
        <div key={index}>
            <h3><strong>Name:</strong> {val.name}</h3>
            <p><strong>Address:</strong> 
            <br />
            <strong>Street</strong>{" "} {val.address.street} - <strong>City</strong> {" "}{val.address.city}</p>
        </div>
      ))}
    </>
  );
};

export default CustomApp;

interface Address {
  street:string;
  city:string;
}

interface User{
    name:string;
    address:Address;
}


const User: React.FC<User> = ({name,address}) => {


  return (
    <>
      <p>Name: {name}</p>
      <p>Address: {address?.street}, {address?.city}</p>
    </>
  );
};
