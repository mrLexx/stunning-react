import { useState } from "react";

export const useCount = (max = -1) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        const value = count < max || max === -1 ? count + 1 : count;
        setCount(value);
    };
    const decrement = () => {
        const value = count > 0 ? count - 1 : 0;
        setCount(value);
    };

    const resetTo = (value) => {
        if (value < 0) {
            setCount(0);
        } else if (max > 0 && value > max) {
            setCount(max);
        } else {
            setCount(value);
        }
    };

    const limitReached = max > 0 && !(count < max);

    return {
        count,
        increment,
        decrement,
        limitReached,
        resetTo,
    };
};
