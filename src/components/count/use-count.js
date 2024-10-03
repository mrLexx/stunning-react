import { useEffect, useState } from "react";

export const useCount = ( max = -1) => {

    const [count, setCount] = useState(0);
    const [limitReached, setLimitReached] = useState(false);

    const increment = () => {
        const value = (count < max || max === -1) ? count + 1 : count;
        setCount((count < max || max === -1) ? count + 1 : count);
        return value;
    }
    const decrement = () => {
        const value = count > 0 ? count - 1 : 0;
        setCount(count > 0 ? count - 1 : 0)
        return value;
    }

    useEffect(() => {
        if (max > 0 && !(count < max)) {
            setLimitReached(true);
        } else {
            setLimitReached(false);
        }
    }, [count])

    const resetTo = (value) => {
        if (max > 0 && value > max) {
            value = max;
        }
        if (value < 0) {
            value = 0;
        }

        setCount(value);
    }

    return {
        count,
        increment,
        decrement,
        limitReached,
        resetTo
    };
}