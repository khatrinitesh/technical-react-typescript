import React, { useState } from 'react'

const App = () => {
  return (
    <div>
        <DisplayComponent backgroundColor='green'/>
    </div>
  )
}

export default App

interface DynamicProps{
    backgroundColor:string;
}

const DisplayComponent:React.FC<DynamicProps> = ({backgroundColor}) => {

    const [isHovered,setIsHovered] = useState<boolean>(false);

    const DynamicCSSStyle:React.CSSProperties = {
        width: '200px',
        height: '200px',
        backgroundColor: isHovered ? 'lightblue' : backgroundColor,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
    }


    return(
        <>
        <div
        style={DynamicCSSStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <p>Dynamic Box</p>
        </div>
        </>
    )
}
