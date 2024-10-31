import styles from "./loading.module.css";
import classNames from "classnames";

export const Loading = ({ position = "center" }) => {
    return (
        <div
            className={classNames(styles.loading, {
                [styles.loadingCenter]: position === "center",
                [styles.loadingLeft]: position === "left",
                [styles.loadingRight]: position === "right",
            })}
        >
            Data is loading...
        </div>
    );
};
