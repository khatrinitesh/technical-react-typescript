import React,{ useState, useEffect, useRef } from 'react';

const CustomApp = () => {
  return (
    <>
      <CountdownTimer initialSeconds={300} />
    </>
  );
}

export default CustomApp;

const CountdownTimer: React.FC<{ initialSeconds: number }> = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState<number>(initialSeconds);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
    // Start the timer
    useEffect(() => {
      if (seconds <= 0) return;
  
      intervalRef.current = setInterval(() => {
        setSeconds(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current as NodeJS.Timeout);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
  
      // Cleanup interval on component unmount
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [seconds]);
  
    // Format the remaining time as MM:SS
    const formatTime = (totalSeconds: number): string => {
      const minutes = Math.floor(totalSeconds / 60);
      const remainingSeconds = totalSeconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };
  
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
        <div className="text-3xl font-mono">{formatTime(seconds)}</div>
      </div>
    );
  };
  