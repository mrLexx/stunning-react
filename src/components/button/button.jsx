import styles from "./button.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme.js";

export const Button = ({ text, disabled, onClick, size, className }) => {
    const { theme } = useTheme();

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={classNames(className, styles.button, {
                [styles.light]: theme === "light",
                [styles.dark]: theme === "dark",
                [styles.small]: size === "small",
                [styles.medium]: size === "medium",
                [styles.big]: size === "big",
            })}
        >
            {text}
        </button>
    );
};
