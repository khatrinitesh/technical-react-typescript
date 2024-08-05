import React, { ChangeEvent, FormEvent, useState } from "react";

const CustomApp:React.FC = () => {

    const [formData,setFormData] = useState<{name:string;email:string;}>({
        name:'',
        email:''
    });

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]:value
        }));
    };
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form submitted',formData);
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleInputChange} placeholder="type name..."/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={handleInputChange} placeholder="type email..."/>
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default CustomApp
