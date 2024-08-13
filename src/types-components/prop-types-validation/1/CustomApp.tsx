import React, { createContext, useContext, useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <Card title="headtitle" content="Cillum ad mollit occaecat aute id anim elit aliquip in ea anim anim enim." imageUrl="https://placehold.co/600x400/EEE/31343C"/>
    </>
  )
}

export default CustomApp

interface CardProps{
    title: string;
    content: string;
    imageUrl?: string; // Optional prop
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
    return (
      <div className="card">
        {imageUrl && <img src={imageUrl} alt={title} />}
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  };