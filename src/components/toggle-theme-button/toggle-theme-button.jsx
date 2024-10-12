import { Button } from "../button/button.jsx";
import { useTheme } from "../theme-context/use-theme.js";
import styles from "./toggle-theme-button.module.css";

export const ToggleThemeButton = () => {
    const { toggleTheme } = useTheme();
    return <Button text={"Toggle theme"} onClick={toggleTheme} className={styles.toggleButton} />;
};
