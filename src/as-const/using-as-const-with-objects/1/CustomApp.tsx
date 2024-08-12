import React, { useEffect, useRef, useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {

    const theme = {
        primary:'blue',
        secondary:'green',
        fontSize:'15px',
        fontWeight:'bold'
    } as const;
      
    return(
        <>
         <div style={{color:theme.primary,fontSize:theme.fontSize}}>
            <p style={{color:theme.primary,fontWeight:theme.fontWeight}}>primary color: {theme.primary}</p>
            <p style={{color:theme.secondary}}>secondary color: {theme.secondary}</p>
         </div>
        </>
    )
}