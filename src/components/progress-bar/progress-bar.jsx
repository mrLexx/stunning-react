import styles from "./progress-bar.module.css"
import { useProgressBar } from "./use-progress-bar.js";
import classNames from "classnames";

export const ProgressBar = ({ viewMode="default", size="usual" }) => {
    const { progress } = useProgressBar();

    const progressBarClass = [];

    switch (viewMode) {
        case 'accent':
            progressBarClass.push(styles.accent);
            break
        case 'default':
        default:
            progressBarClass.push(styles.default);
            break
    }
    switch (size) {
        case 'small':
            progressBarClass.push(styles.sizeSmall);
            break;
        case 'big':
            progressBarClass.push(styles.sizeBig);
            break;
        case 'usual':
        default:
            progressBarClass.push(styles.sizeUsual);
            break;
    }

    return (<>
        <div>
            <div
                className={classNames(
                    styles.progressBar,
                    progressBarClass
                )}
                style={{
                    width: progress,
                }}></div>
        </div>
    </>);
}