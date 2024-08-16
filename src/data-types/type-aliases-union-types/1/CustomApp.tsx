import React, { useState } from 'react'

const CustomApp = () => {
    // Define the status you want to pass to User
  const [status, setStatus] = React.useState<Status>('active');
  return (
    <>
        <User status={status} />
    </>
  )
}

export default CustomApp

type Status = 'active' | 'inactive' | 'pending'

interface StatusDisplayProps{
    status:Status;
}

const User:React.FC<StatusDisplayProps>  =({status}) => {
   
    return(
        <>
        Status: {status}
        
        </>
    )
}