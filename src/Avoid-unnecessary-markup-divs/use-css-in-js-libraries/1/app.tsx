import React from 'react';
import styled from 'styled-components';
const profilecardata = [
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
  ];

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

interface ProfileCardProps {
    avatar: string;
    username: string;
    bio: string;
}

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

const ProfileCard: React.FC<ProfileCardProps> = ({ avatar, username, bio }) => {
    return (
      <Card>
        <Avatar src={avatar} alt="Avatar" />
        <h2>{username}</h2>
        <p>{bio}</p>
      </Card>
    );
  };