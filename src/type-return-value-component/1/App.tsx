import React, { useState } from 'react'


const App:React.FC = () => {

   
  return (
    <>
    <ConditionalMsg showMsg="Magna laboris amet est aliqua laboris est enim ad."/>
    </>
  )
}


export default App

interface ConditionalMsgProps{
    showMsg:boolean;
}

const ConditionalMsg:React.FC<ConditionalMsgProps> = ({showMsg}) => {
    if(!showMsg){
        return null;  // Render nothing
    }

    return <p>The message is visible!</p>;
}