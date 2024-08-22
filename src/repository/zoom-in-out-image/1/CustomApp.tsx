import React,{ useState, useEffect, useRef } from 'react';

const CustomApp:React.FC = () => {
  return (
    <>
      <ImageZoom/>
    </>
  );
}

export default CustomApp;

const ImageZoom:React.FC  =() => {
    const [zoom,setZoom] = useState<number>(1);

    const handleZoomIn = () => {
        setZoom(prevZoom => Math.min(prevZoom + 0.1,3)); // max zoom level of 3
    }

    const handleZoomOut = () => {
        setZoom(prevZoom => Math.max(prevZoom - 0.1,1)); // min zoom level of 1
    }

    return(
        <>
         <div className="flex flex-col items-center p-4">
            <div className="relative">
                <img src="https://via.placeholder.com/600" alt="zoomable"  style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
          className="object-contain" />
            </div>
            <div className="mt-64 flex space-x-2">
                <button onClick={handleZoomIn} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none">zoom in</button>
                <button onClick={handleZoomOut} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none">zoom out</button>
            </div>
         </div>
        </>
    )
}