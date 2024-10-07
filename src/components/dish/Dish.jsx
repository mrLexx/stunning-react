import { Count } from "../count/Count.jsx";
import { useCount } from "../count/use-count.js";
import styles from "./dish.module.css"
import classNames from "classnames";

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
            {name} ({ingredients.join(", ")}) - <span className={classNames(styles.price)}>{price}</span>
            <div className={classNames(styles.count)}>
                <Count
                    count={count}
                    increment={increment}
                    decrement={decrement}
                    limitReached={limitReached}
                />
            </div>
        </>
    );
};
