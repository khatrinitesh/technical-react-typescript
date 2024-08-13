import React, { useState } from 'react'

const CustomApp = () => {

  return (
    <>
        <Example className="bg-black" title="HeadTitle" content="Reprehenderit exercitation ex consectetur sit voluptate anim ea nulla ut tempor."  />
    </>
  )
}


export default CustomApp

interface CardProps{
    title:string;
    content:string;
    className?:string; // Optional prop for custom styling
}


const Example:React.FC<CardProps> = ({title,content,className}) => {

    return(
        <>
          <div className={`card ${className}`}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </>
    )
}