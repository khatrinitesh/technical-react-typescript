import styles from "../AuthStatus/AuthStatus.module.css";
import { useAuth } from "../../contexts/AuthStatus";

const AuthStatus:React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();
    return(
        <div className={styles.container}>
            {isAuthenticated
            ?(
                <button onClick={logout} className={styles.button}>Logout</button>
            )
        :
        (
            <button onClick={login} className={styles.button}>login</button>
        )}
        </div>  
    )
}
export default AuthStatus;