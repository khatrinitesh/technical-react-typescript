import React, { useEffect, useState } from 'react';

const BooleanComp:React.FC = () => {
  return (
    <>
       <Example/>
    </>
  );
}

export default BooleanComp;

// const Example:React.FC = () => {
//     const [isVisible, setIsVisible] = useState<boolean>(false);

//     const toggleVisibility = () => {
//         setIsVisible(!isVisible)
//     }

   
//     return(
//         <>
//         <button onClick={toggleVisibility}>
//             {isVisible ? 'hide' : 'show'}
//         </button>
//         {isVisible && <p>This content is toggled by a boolean state.</p>}
//         </>
//     )
// }

const Example:React.FC = () => {
    const [isChecked,setIsChecked] = useState<boolean>(false);
    const handleChange = (e:React.ChangeEventHandler<HTMLInputElement>) => {
        setIsChecked(e.target.value)
    }
    return(
        <>
        <input type="text" checked={isChecked} onChange={handleChange} className='shadow border h-[30px] outline-none' />
        {isChecked ? 'checked' : 'unchecked'}
        </>
    )
}
