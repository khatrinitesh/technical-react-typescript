import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface Post{
    id:number;
    title:string;
    body:string;
}

const CustomApp = () => {
  return (
    <>
    <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {
    const [posts,setPosts] = useState<Post[]>([]);
    const [error,setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
                setPosts(response.data);
            } catch (error) {
                setError('Failed to fetch posts');
            }
        }

        fetchPosts();
    },[]);

    return(
        <>
         <h1>Posts</h1>
         {error && <p>{error}</p>}
         {posts.map((post) => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <br />
                {post.body}
            </li>
         ))}
        </>
    )
}

