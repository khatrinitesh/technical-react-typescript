import React, { createContext, useContext, useState } from 'react'

const App:React.FC = () => {

  return (
    <>
    <SuccessAlert message="This is a successful message"/>
    </>
  )
}

export default App

interface SuccessMessage{
    status:'success';
    message:string;
}

interface ErrorMessage{
    status:'error';
    error:string;
}

type Message = SuccessMessage | ErrorMessage;

type Extracted = Extract<Message,SuccessMessage>;

const SuccessAlert:React.FC<Extracted> => ({message}) => {
    return <div style={{color:'green'}}>{message}</div>
}
