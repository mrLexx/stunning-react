import { useEffect, useRef } from "react";

const delay = 1000;

export const useCurrentTime = (callback) => {
    const timeoutRef = useRef(0);

    useEffect(() => {
        timeoutRef.current = setInterval(() => {
            callback(new Date());
        }, delay);
        return () => {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        };
    }, [callback]);
};
