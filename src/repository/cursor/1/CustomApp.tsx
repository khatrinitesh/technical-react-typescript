import React,{ useState, useEffect, useRef } from 'react';

const CustomApp:React.FC = () => {
  return (
    <>
      <CursorComp/>
    </>
  );
}

export default CustomApp;

const CursorComp:React.FC  =() => {

    const [cursorStyle,setCursorStyle] = useState<string>('default')

    const handleMouseEnter = () => {
        setCursorStyle('grab')
    }
    const handleMouseLeave = () => {
        setCursorStyle('default')
    }
    
    return(
        <>
         <div className="flex flex-col items-center p-4">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{cursor:cursorStyle}} className="px-4 py-2 border border-gray-300 rounded-md"></div>
         </div>
        </>
    )
}