import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example isLoggedIn={true} />
    </>
  )
}

export default CustomApp


interface Props{
    userName?:string;
}
//  Logical AND (&&) Operator
const Example:React.FC<Props> = ({userName}) => {
    const displayName = userName || 'guest' 

    return(
        <>
          {displayName}
        </>
    )
}