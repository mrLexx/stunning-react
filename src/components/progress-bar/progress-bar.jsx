import { useEffect, useState } from "react";

const defaultStyle = {
    backgroundColor: '#DC2626',
    top: 0,
    position: 'fixed',
    height: '10px',
    left: 0,
    zIndex: 9999,
};

export const ProgressBar = ({ style }) => {
    const [progress, setProgress] = useState('0%');

    useEffect(() => {
        const handleProgress = () => {
            setProgress(Math.floor((window.scrollY * 100 / (document.body.scrollHeight - window.innerHeight))) + '%');
        };

        window.addEventListener('scroll', handleProgress);

        return () => {
            window.removeEventListener('scroll', handleProgress);
        };


    }, []);

    return (<>
        <div>
            <div style={{
                ...defaultStyle,
                ...style,
                width: progress,
            }}></div>
        </div>
    </>);
}