import React,{ useState, ChangeEvent, KeyboardEvent, useRef } from 'react';

const CustomApp = () => {
  return (
    <>
      <OTPInput/>
    </>
  );
}

export default CustomApp;

const OTPInput:React.FC = () => {
   // Define state for OTP values and current active index
   const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
   const inputsRef = useRef<(HTMLInputElement | null)[]>([]); // Ref to hold input elements

   // Handle input change
   const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    if (/^[0-9]$/.test(value) || value === '') {
      // Update OTP state with the new value
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if value is entered
      if (value && index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  // Handle key down event to move focus on backspace
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  // Handle form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullOtp = otp.join('');
    console.log('Submitted OTP:', fullOtp);
    // Process OTP submission here
  };

    return(
        <>
         <form onSubmit={handleSubmit}>
      <div className="otp-container">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(event) => handleChange(event, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            maxLength={1}
            className="otp-input"
            ref={(el) => (inputsRef.current[index] = el)}
          />
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
        </>
    )
}
