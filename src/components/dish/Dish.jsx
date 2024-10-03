import { Count } from "../count/Count.jsx";
import { useCount } from "../count/use-count.js";

const max = 7;
export const Dish = ({ name, ingredients, price }) => {
    const {
        count,
        increment,
        decrement,
        limitReached
    } = useCount(max);

    return (
        <>
            {name} ({ingredients.join(", ")}) - ${price}
            <Count
                count={count}
                increment={increment}
                decrement={decrement}
                limitReached={limitReached}
            />
        </>
    );
};
