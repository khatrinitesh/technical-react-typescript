import React from 'react'

const CustomApp = () => {
  return (
    <>
        <Example isLogged={true}/>
    </>
  )
}

export default CustomApp

interface Props{
    isLogged:boolean;
}

/// conditional rendering

const Example:React.FC<Props> = ({isLogged}) => {
 
    return(
        <>
        <div>
            {isLogged ? (<>hi</>) : (<>hello</>)}
        </div>
        </>
    )
}