import React,{ useState, useEffect, useRef } from 'react';

const CustomApp:React.FC = () => {
  return (
    <>
      <CustomSelect/>
    </>
  );
}

export default CustomApp;

const CustomSelect:React.FC  =() => {
    const baseImg = import.meta.env.VITE_ASSETS
   
    return(
        <>
        <div className='bg-bg1 bg-cover w-[100px] h-[100px]'></div>
       <img src={`${baseImg}/images/bg-wallpaper.jpg`} alt="" />
        </>
    )
}