import React, { useEffect, useRef, useState } from 'react'
import { PostListProps } from './types'

const samplePosts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the first post.', author: 'Alice' },
    { id: 2, title: 'Second Post', content: 'This is the second post.', author: 'Bob' },
    { id: 3, title: 'Third Post', content: 'This is the third post.', author: 'Charlie' },
  ];

const CustomApp = () => {
  return (
    <>
    <PostList posts={samplePosts}/>
    </>
  )
}

export default CustomApp

const PostList:React.FC<PostListProps> = ({posts}) => {
    return(
        <>
        <ul>
            {posts.map((val) => (
                <li key={val.id}>
                    <h2>{val.title}</h2>
                    <p>{val.content}</p>
                    <p>Author: {val.author}</p>
                </li>
            ))}
        </ul>
        </>
    )
}
