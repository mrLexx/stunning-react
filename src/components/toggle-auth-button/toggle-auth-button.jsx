import { Button } from "../button/button.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import styles from "./toggle-auth-button.module.css";

export const ToggleAuthButton = () => {
    const { user, toggleLogin } = useAuth();

    return (
        user.auth
            ? <>{user.name} <Button
                text={'Logout'}
                onClick={toggleLogin}
                className={styles.toggleButton}
            />
            </>
            : <Button
                text={'Login'}
                onClick={toggleLogin}
                className={styles.toggleButton}
            />
    )
}