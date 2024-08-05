import React from 'react';
import styles from './profile.module.css'

interface ProfileCardProps{
    avatar:string;
    username:string;
    bio:string;
}

const CustomApp:React.FC<ProfileCardProps> = ({avatar,username,bio}) => {
  return (
    <>
    <div className={styles.profileCard}>
        <img src={avatar} alt="Avatar" />
        <h2>{username}</h2>
        <p>{bio}</p>
    </div>
    </>
  )
}

export default CustomApp