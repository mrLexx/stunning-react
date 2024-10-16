import { ProgressBar } from "../progress-bar/progress-bar.jsx";
import { Outlet } from "react-router-dom";
import { ToggleAuthButton } from "../toggle-auth-button/toggle-auth-button.jsx";
import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button.jsx";
import styles from "./layout.module.css";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs.jsx";
import { Cart } from "../cart/cart.jsx";
import { CurrentTime } from "../current-time/current-time.jsx";

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.toggle}>
                <CurrentTime className={styles.time} />
                <ToggleThemeButton className={styles.toggleButton} />
                <ToggleAuthButton className={styles.toggleButton} />
            </div>
            <div>
                <Cart />
            </div>
            <div className={styles.toggle}>
                <Breadcrumbs />
            </div>
            <ProgressBar viewMode={"accent"} size={"small"} />
            <Outlet />
            {children}
        </div>
    );
};
