import React from 'react'

const CustomApp = () => {
  return (
    <>
        <Example count={-5}/>
    </>
  )
}

export default CustomApp


//Using Functions to Compute Values - you can define functions inside components to compute values used in rendering.

interface Props{
    count:number;
}

const Example:React.FC<Props> = ({count}) => {
    const getMsg = (count:number) => {
        if(count > 10){
            return 'high count'
        }
        else if(count > 0){
            return 'count is positive'
        }
        else{
            return 'count is zero or negative'
        }
    }
    return(
        <>
           <p>Current count: {count}</p>
           <p>{getMsg(count)}</p>
        </>
    )
}