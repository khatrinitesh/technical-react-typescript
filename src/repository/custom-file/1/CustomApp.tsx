import React,{ useState, useEffect, useRef } from 'react';

const CustomApp:React.FC = () => {
  return (
    <>
      <CustomFile/>
    </>
  );
}

export default CustomApp;

const CustomFile:React.FC  =() => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [file,setFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
          setFile(selectedFile);
          setFileName(selectedFile.name);
        } else {
          setFile(null);
          setFileName(null);
        }
      };
   
    return(
        <>
        <div className="flex flex-col items-center p-4">
      <label className="flex flex-col items-center cursor-pointer bg-blue-500 text-white p-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden" // Hide the native file input
        />
        <span className="text-sm">Choose File</span>
        {fileName && <span className="mt-2 text-gray-700">{fileName}</span>}
      </label>
    </div>
        </>
    )
}