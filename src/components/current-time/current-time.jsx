import { useState } from "react";
import { useCurrentTime } from "./use-current-time.js";
import { format } from "date-fns";
import styles from "./current-time.module.css";
import classNames from "classnames";

export const CurrentTime = (props) => {
    const [time, setTime] = useState(new Date());
    useCurrentTime(setTime);

    return <div className={classNames(props.className, styles.time)}>{format(time, "dd.MM.yy kk:mm:ss")}</div>;
};
