import { useEffect, useState } from "react";
import ScrollProgress from "scrollprogress";
import "./progress-bar.css"

export const ProgressBar = ({ style }) => {
    const [progress, setProgress] = useState('0%');

    useEffect(() => {
        const progressObserver = new ScrollProgress((x, y) => {
            setProgress(y * 100 + '%');
        });
        return () => {
            progressObserver.destroy();
        }
    }, []);

    return (<>
        <div className={"progress-bar"} style={{
            ...style,
            width: progress,
        }}></div>
    </>);
}