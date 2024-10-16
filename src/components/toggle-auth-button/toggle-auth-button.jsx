import { Button } from "../button/button.jsx";
import { useAuth } from "../auth-context/use-auth.js";

export const ToggleAuthButton = (props) => {
    const { user, toggleLogin } = useAuth();

    return (
        <>
            <Button {...props} text={user.auth ? "Logout" : "Login"} onClick={toggleLogin} /> {user.auth && user.name}
        </>
    );
};
