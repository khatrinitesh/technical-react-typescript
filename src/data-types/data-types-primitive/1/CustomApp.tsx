import React from 'react'

const CustomApp = () => {
    let name:string = 'hello world'

    let age:number = 1323

    let isActive:boolean = false

    let value:null = null;

    let data:undefined;

    let uniqueID:symbol = Symbol('id')

    let bigint:bigint = 1234567890123456789012345678901234567890n
  return (
    <>
    {/* string */}
    {name}
    <br />
    {/* mnumber */}
    {age}
    <br />
    {/* boolean */}
    {isActive ? 'yes' : 'no'}
    <br />
    {/* null -  Represents an intentional absence of any object value. */}
    {value}
    <br />
    {/* undefined - represents an uninitialized variable */}
    {data}
    <br />
    {/* symbol - represents a unique and immutable primitive value */}
    {uniqueID}
    <br />
    {bigint}
    </>
  )
}

export default CustomApp