import React from 'react';

const CustomApp = () => {

 
  return (
    <>
  <Button />
    </>
  )
}

export default CustomApp


const Button:React.FC = () => {

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked')
}
  return(
    <>
   <button onClick={handleClick}>Click me</button>
    </>
  )
}