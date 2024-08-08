import React from 'react'

const App = () => {
  return (
    <div>
        <Card title="hello" content="Dolor magna labore aliquip sunt ut eiusmod quis." className="custom-class" id="unique-id" data-custom="custom-data"/>
    </div>
  )
}

export default App

// Define props for Card component
interface CardProps {
    title: string;
    content?: string;
    [key: string]: any; // Capture all additional props
  }

  const Card: React.FC<CardProps> = ({ title, content, ...rest }) => {
    return (
      <div {...rest} style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h2>{title}</h2>
        {content && <p>{content}</p>}
      </div>
    );
  };