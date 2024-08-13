import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example isLoggedIn={true} hasNotifications={true} />
    </>
  )
}

export default CustomApp


interface Props{
    isLoggedIn: boolean;
  hasNotifications: boolean;
}
//  Logical AND (&&) Operator
const Example:React.FC<Props> = ({isLoggedIn,hasNotifications}) => {
    return(
        <>
          {isLoggedIn && (
            <div>
                <h2>Welcome</h2>
                {hasNotifications && (<><p>Eu enim adipisicing commodo dolor ea sunt veniam labore proident do nulla ipsum pariatur.</p></>)}
            </div>
          )}
        </>
    )
}