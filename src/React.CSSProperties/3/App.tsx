import React, { useState } from 'react'

const App = () => {
  return (
    <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      <Card
        title="Card Title 1"
        content="This is the content of the first card."
        backgroundColor="#FF5722"
        borderColor="#FFC107"
      />
      <Card
        title="Card Title 2"
        content="This is the content of the second card."
        backgroundColor="#4CAF50"
      />
    </div>
    </div>
  )
}

export default App

interface CardProps{
    title:string;
    content:string;
    backgroundColor:string;
    borderColor?:string; // Optional prop for border color
}

const Card:React.FC<CardProps> = ({title,content,backgroundColor,borderColor}) => {

    const [isHovered,setIsHovered] = useState(false);

     // Define styles with conditional and responsive properties
  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '300px',
    padding: '20px',
    backgroundColor: isHovered ? 'lightgray' : backgroundColor,
    border: `2px solid ${borderColor || 'transparent'}`,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    '@media (max-width: 600px)': {
      padding: '15px',
    },
  };

    return(
        <>
         <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </div></>
    )
}