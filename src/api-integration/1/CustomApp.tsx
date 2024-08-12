import React, { useEffect, useRef, useState } from 'react';
import { User } from './types';
import { fetchUsers } from './UserService';


const CustomApp = () => {
  return (
    <>
    <Example/>
    </>
  )
}

export default CustomApp

const Example:React.FC = () => {

    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);
    const [data,setData] = useState<User[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                setData(data);
            } catch (error) {
                setError('Failed to fetch users')
            }
            finally{
                setLoading(false)
            }
        }
        getUsers()
    },[])
   

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return(
        <>
            <h1>Users</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

