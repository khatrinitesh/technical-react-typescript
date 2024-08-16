import React from 'react'

const CustomApp = () => {
  return (
    <>
    {numbers}
    <br />
    {names}
    <hr/>
    {users.map((val) => (
        <div key={val.id}>{val.name}</div>
    ))}
    <br />
    {numberswise}
    <br />
    {numberNewWise}
    <br />
    {person}
    <br />
    {data}
    <br />
    {/* {user} */}
    <br />
    {profile.name}
    <br />
    {userInfo}
    <br />
    {value}
    </>
  )
}

export default CustomApp

// array of primitives
let numbers:string[] = [1,2,3,4,5]
let names:string[] = ['a','b','c']

// array of objects
interface User{
    id:number;
    name:string;
}
let users:User[] = [
    {id:1,name:'a'},
    {id:2,name:'b'},
]

// using generic arrays
let numberswise:Array<number> = [1,2,3,4]
let numberNewWise:Array<number> = [33.44,55,66,77,88,].join(', ')

// tuples 
let person:[string,number] = ['nitesh ',55555]

// Tuple with Optional Elements:
let data:[string,number?] = ['michael']
const userInfo:[string, number,city] = ['happy',12222,'mumbai']

// objects 
// simple objects
let user: { id: number; name: string; } = {
    id: 1,
    name: 'Alice'
  };

//   object with nested objects
let profile: {
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
    };
  } = {
    name: 'Alice',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Wonderland'
    }
  };

  // any
  let value:any = 'helloo'
