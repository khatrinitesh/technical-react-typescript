import React,{ useState, ChangeEvent,  } from 'react';

const CustomApp = () => {
  return (
    <>
      <ClipboardComp/>
    </>
  );
}

export default CustomApp;

const ClipboardComp:React.FC = () => {
    const [text,setText] = useState<string>('');
    const [copyStatus,setCopyStatus] = useState<string>('');

    const handleCopy  = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyStatus('text copied to clipboard')
        } catch (error) {
            setCopyStatus('failed to copy text');
            console.error('failed to copy text',error);
        }
    }
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    return(
        <>
          <div className="flex flex-col items-center space-y-4 p-4">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text to copy"
        className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Copy to Clipboard
      </button>
      {copyStatus && (
        <p className={`text-base ${copyStatus.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
          {copyStatus}
        </p>
      )}
    </div>
        </>
    )
}
