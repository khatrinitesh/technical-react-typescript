import React from 'react'

const CustomApp = () => {
  return (
    <>
        <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {

    // creating elements 
    const heading = React.createElement('h1',null,'hello world');
    const paragraph = React.createElement('p',null,'Adipisicing Lorem minim qui proident tempor laboris ad.')
    return(
        <>
        <div>
            {heading}
            <br />
            {paragraph}
        </div>
        </>
    )
}