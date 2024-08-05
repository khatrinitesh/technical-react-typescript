import React from 'react'
import AuthStatus from '../../components/AuthStatus/AuthStatus';
import styles from "../About/About.module.css"

const About:React.FC = () => {
  return (
    <>
     <div className={styles.container}>
        <h1>About us</h1>
        <AuthStatus/>
     </div>
    </>
  )
}

export default About