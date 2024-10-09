import { useEffect, useState } from "react";

export const useProgressBar = () => {
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

    return { progress };
}