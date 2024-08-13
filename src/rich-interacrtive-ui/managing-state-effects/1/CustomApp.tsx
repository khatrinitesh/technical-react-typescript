import React, { useState, useEffect } from 'react';

const CustomApp = () => {
  return (
    <>
    <Example/>
    </>
  )
}

export default CustomApp

interface User {
    id: number;
    name: string;
    // Add other fields as necessary
  }

const Example:React.FC = () => {

    const [data,setData] = useState<User[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                    throw new Error('sorry something went wrong',error)
                }
                const result  = await response.json();
                setData(result)
                console.log(result );
            } catch (error) {
                setError('failed to fetch data')
            }
            finally{
                setLoading(false);
            }
        }
        fetchData()
    },[])
      
        
        if(loading){
            return(
                <div>Loading...</div>
            )
        }

        if(error){
            return(
                <div>{error}</div>
            )
        }
    return(
        <>
            <div>Data: 
                {data.map((val) => (
                    <div key={val.id}>
                        {val.name}
                    </div>
                ))}
                </div>
        </>
    )
}
