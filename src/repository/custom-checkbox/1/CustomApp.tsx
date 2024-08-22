import React,{ useState, useEffect, useRef } from 'react';

const CustomApp:React.FC = () => {
  return (
    <>
      <CustomCheckbox/>
    </>
  );
}

export default CustomApp;

const CustomCheckbox:React.FC  =() => {
    const [isChecked,setIsChecked] = useState<boolean>(false)

    const handleChecked = () => {
        setIsChecked(!isChecked)
    }
   
    return(
        <>
        <div className="flex items-center">
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
          className="sr-only" // Hide the native checkbox
        />
        <div
          className={`w-6 h-6 border-2 text-white rounded-sm transition-colors duration-300 ${
            isChecked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
          }`}
        >
          <svg
            className={`w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
              isChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className='ms-10 text-black'>Agree</span>
        </div>
      </label>
    </div>
        </>
    )
}