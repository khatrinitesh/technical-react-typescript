import React from 'react';

const profilecardata = [
    {avatar:'wallpaper.webp',username:'xyz1',bio:'excellent1'},
    {avatar:'wallpaper.webp',username:'xyz2',bio:'excellent2'},
    {avatar:'wallpaper.webp',username:'xyz3',bio:'excellent3'},
    {avatar:'wallpaper.webp',username:'xyz4',bio:'excellent4'},
]

const CustomApp = () => {
  return (
    <>
     {profilecardata.map((val,index) => (
        <ProfileCard key={index} avatar={val.avatar} username={val.username} bio={val.bio} />
     ))}
    </>
  )
}

export default CustomApp

const ProfileCard:React.FC<{avatar:string;username:string;bio:string}> = ({avatar,username,bio}) => {
    const imagePath = `${import.meta.env.VITE_ASSETS}/images/${avatar}`;
    return(
        <>
        <div className="profile-card">
            <div className="profile-header">
            <img src={imagePath} alt="Avatar" style={{maxWidth:'100px'}} />
            </div>
            <div className="profile-body">
            <h2>{username}</h2>
            <p>{bio}</p>
            </div>
        </div>
        </>
    )
}