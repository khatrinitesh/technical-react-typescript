import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Example isActive={false}  />
    </>
  )
}

export default CustomApp


interface Props{
    isActive: boolean;
}
//  Logical AND (&&) Operator
const Example:React.FC<Props> = ({isActive}) => {
    return(
        <>
          <div className={`status ${isActive ? 'active' : 'inactive'}`}>
            {isActive && <span>Active</span>}
            {!isActive && <span>Inactive</span>}
          </div>
        </>
    )
}