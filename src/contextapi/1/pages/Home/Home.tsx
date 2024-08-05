import React from 'react'
import AuthStatus from '../../components/AuthStatus/AuthStatus';
import styles from "../Home/Home.module.css";

const Home:React.FC = () => {
  return (
    <div>
        <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <AuthStatus />
    </div>
    </div>
  )
}

export default Home