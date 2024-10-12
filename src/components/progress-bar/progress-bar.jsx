import styles from "./progress-bar.module.css";
import { useProgressBar } from "./use-progress-bar.js";
import classNames from "classnames";

export const ProgressBar = ({ viewMode = "default", size = "usual" }) => {
    const { progress } = useProgressBar();

    return (
        <>
            <div>
                <div
                    className={classNames(
                        styles.progressBar,

                        { [styles.default]: viewMode === "default" },
                        { [styles.accent]: viewMode === "accent" },

                        { [styles.sizeSmall]: size === "small" },
                        { [styles.sizeMedium]: size === "medium" },
                        { [styles.sizeBig]: size === "big" },
                    )}
                    style={{
                        width: progress,
                    }}
                ></div>
            </div>
        </>
    );
};
