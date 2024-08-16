import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <User />
    </>
  )
}

export default CustomApp



const User:React.FC  =() => {

    const example:[string,number,boolean] = ['nitesh',32,true]
   
    return(
        <>
        <p>Name: {example[0]}</p>
        <p>Age: {example[1]}</p>
        <p>Status: {example[2] ? (<><span className='text-green-600'>done</span></>) : (<><span className='text-red-600'>pending</span></>)}</p>
        </> 
    )
}