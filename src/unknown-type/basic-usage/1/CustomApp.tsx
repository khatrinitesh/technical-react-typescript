import React, { useEffect, useRef, useState } from 'react'

const CustomApp = () => {
  return (
    <>
    <FormatCode/>
    </>
  )
}

export default CustomApp

interface Props{
  data:unknown; // `data` can be of any type
}

const Example:React.FC  = () => {


  return(
    <>
    <FormatCode data="hello world"/>
    <FormatCode data={123}/>
    <FormatCode data={{}}/>
    </>
  )
}


const FormatCode:React.FC<Props> = ({data}) => {
  if(typeof data === 'string'){
    return <div>{data}</div>
  }
  else if(typeof data === 'number'){
    return <div>{data.toFixed(2)}</div>
  }
  else{
    return <div>Unsupported type</div>
  }
}