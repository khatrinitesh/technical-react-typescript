import React from 'react';

const profilecardata = [
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
    { avatar: 'wallpaper.webp', username: 'xyz', bio: 'excellent' },
  ];

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

interface ProfileCardProps {
    avatar: string;
    username: string;
    bio: string;
  }

  const ProfileCard:React.FC<ProfileCardProps> = ({avatar,username,bio}) => {
        // Adjust this path as needed based on where images are stored
        const imagePath = `${import.meta.env.VITE_ASSETS}/images/${avatar}`;
    return(
        <>
        <Layout style={{ border: '1px solid #ccc', borderRadius: '8px' }}>
            <img src={imagePath} alt="Avatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <h2>{username}</h2>
            <p>{bio}</p>
        </Layout>
        </>
    )
  }

const Layout:React.FC<{childre:React.ReactNode;style?:React.CSSProperties}> = ({children,style}) => {
    return(
        <>
        <div style={{ padding: '20px', ...style }}>
            {children}
        </div>
        </>
    )
}