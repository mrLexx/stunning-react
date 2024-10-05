import { useState } from "react";

export const useCount = (max = -1) => {

    const [count, setCount] = useState(0);

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
        limitReached: (max > 0 && !(count < max)),
        resetTo
    };
}