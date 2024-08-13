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
    isLoggedIn:boolean;
}
//  Logical AND (&&) Operator
const Example:React.FC<Props> = ({isLoggedIn}) => {

    return(
        <>
          {isLoggedIn && <>Id labore enim duis qui sint elit cillum nostrud cupidatat reprehenderit minim aliquip.</>}
        </>
    )
}