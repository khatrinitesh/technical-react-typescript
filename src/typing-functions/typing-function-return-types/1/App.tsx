import React, { useState, useEffect } from 'react';

interface PostData{
    title:string;
    body:string;
}

// function to fetch user data 
const fetchUserData = async (userId:number): Promise<PostData> => {
    // simulating an API Call
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    const data = await response.json();
    return {
        title:data.title,
        body:data.body
    }
}

const App = () => {

    const [posts,setPosts] = useState<PostData | null>(null);

    useEffect(() => {
        const loadUserData = async () => {
        const userData  = await fetchUserData(3);
            setPosts(userData)
        }

        loadUserData()
    },[])
  return (
    <>
        {posts? (
            <p>Title: <h2>{posts.title}</h2>, body: {posts.body}</p>
        ): (
            <p>Loading user data...</p>
        )}
    </>
  )
}

export default App
