import React, { ChangeEvent, FormEvent, useState } from "react";

const CustomApp:React.FC = () => {

    
    return(
        <>
        <VisibilityToggle/>
        </>
    )
}

export default CustomApp

const VisibilityToggle:React.FC = () => {
    const [isVisible,setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(preVisibility => !preVisibility)
    }
    return(
        <>
        {isVisible && <p>this content is visbililty</p>}
        <button onClick={toggleVisibility}>
            {isVisible ? 'hide' : 'show'}
        </button>
        </>
    )
}
