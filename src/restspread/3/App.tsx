import React from 'react'

const App = () => {

    const handleClick  = (message:string) => {
        alert(`hello ${message}`)
    }
  return (
    <div>
        <CardComp 
        label="card title"
        content="Labore sit cupidatat sit sit magna enim."
        onClick={() => handleClick('nitesh')}
        style={{padding:'20px',border:'1px solid #ccc'}}/>
    </div>
  )
}

export default App

interface CardProps{
    label:string;
    content:string;
    onClick:() => void;
    style?: React.CSSProperties; // Example of additional props
}

const CardComp:React.FC = ({label, content, onClick,...rest}) => {
    return(
        <>
         <div onClick={onClick} {...rest}>
            <h2>{label}</h2>
            <p>{content}</p>
         </div>
        </>
    )
}