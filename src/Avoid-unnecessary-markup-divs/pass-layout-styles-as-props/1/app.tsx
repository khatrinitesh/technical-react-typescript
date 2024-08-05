import React from 'react';

const profilecardata = [
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
  ];

interface ProfileCardProps {
    avatar: string;
    username: string;
    bio: string;
    style?:React.CSSProperties; // Allow for additional custom styles
}

const defaultStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const CustomApp:React.FC = () => {
  return (
    <>
    {profilecardata.map((val, index) => (
        <ProfileCard
          key={index}
          avatar={val.avatar}
          username={val.username}
          bio={val.bio}
        />
      ))}
    </>
  )
}

export default CustomApp

const ProfileCard: React.FC<ProfileCardProps> = ({ avatar, username, bio, style }) => (
    <div style={{ ...defaultStyle, ...style }}>
      <img src={avatar} alt="Avatar" />
      <h2>{username}</h2>
      <p>{bio}</p>
    </div>
  );