import styles from "./error.module.css";
import classNames from "classnames";

export const Error = ({ position }) => {
    return (
        <div
            className={classNames(styles.error, {
                [styles.errorCenter]: position === "center",
                [styles.errorLeft]: position === "left",
                [styles.errorRight]: position === "right",
            })}
        >
            Data error!!!
        </div>
    );
};
