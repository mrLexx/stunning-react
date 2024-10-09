import styles from "./button.module.css"
import classNames from "classnames";

export const Button = ({ text, disabled, onClick, size, className }) => {

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={
                classNames(
                    className,
                    styles.button,
                    {
                        [styles.small]: size === 'small',
                        [styles.medium]: size === 'medium',
                        [styles.big]: size === 'big'
                    }
                )
            }
        >
            {text}
        </button>
    );
};
