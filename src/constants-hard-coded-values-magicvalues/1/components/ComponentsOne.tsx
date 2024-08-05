import React, { useEffect, useState } from 'react';
import { API_BASE_URL,ERROR_MESSAGES,THEME_COLORS } from '../constants/constants';

interface Post {
    // Define the shape of your post data here
    id: number;
    title: string;
    body: string;
  }

const ComponentsOne:React.FC = () => {

    const [posts,setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);


    const handleData = async () => {
        try {
            const response = await fetch(API_BASE_URL)
            if(!response.ok){
                throw new Error(ERROR_MESSAGES.NETWORK_ERROR)
            }
            const result: Post[] = await response.json();
            setPosts(result)
            console.log(result);
            
        } catch (error) {
            setError((error as Error).message);
            console.error('Fetch error:', error)
        }
    }

    useEffect(() => {
        
        
        handleData()
    },[]);
  return (
    <div style={{ backgroundColor: THEME_COLORS.LIGHT }}>
          {error && <p>Error: {error}</p>}
          <ul>
          {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
          </ul>
    </div>
  )
}

export default ComponentsOne