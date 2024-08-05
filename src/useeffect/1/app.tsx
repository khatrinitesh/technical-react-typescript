import React, { useState,useEffect  } from 'react';
import axios from 'axios';

const CustomApp = () => {
  return (
    <>
    <CustomHooks/></>
  )
}

export default CustomApp

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

const CustomHooks:React.FC = () => {
    const [posts, setPosts] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [time, setTime] = useState<number>(0);

    // 1. Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); // Empty dependency array means this runs only once on mount

       // 2. Handle form input change
        useEffect(() => {
            const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value);
            };

            // Assuming there’s an input field to track changes
            const inputElement = document.getElementById('my-input') as HTMLInputElement;
            if (inputElement) {
            inputElement.addEventListener('change', handleInputChange);
            }

            return () => {
            if (inputElement) {
                inputElement.removeEventListener('change', handleInputChange);
            }
            };
        }, []); // Empty dependency array for the input change handler

         // 3. Setup a timer
        useEffect(() => {
            const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
            }, 1000);

            return () => clearInterval(timer); // Cleanup timer on unmount
        }, []); // Empty dependency array means this runs only once on mount
    
    return(
        <>
            <h1>Example Component</h1>
            <input id="my-input" type="text" placeholder="Type something..." />
            <div>
                <h2>Posts</h2>
                <ul>
                {posts.map(post => (
                    <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    </li>
                ))}
                </ul>
            </div>
            <p>Input Value: {inputValue}</p>
            <p>Time: {time} seconds</p>
        </>
    )
}

