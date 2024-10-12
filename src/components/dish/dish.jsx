import { Count } from "../count/count.jsx";
import { useCount } from "../count/use-count.js";
import styles from "./dish.module.css";
import { useAuth } from "../auth-context/use-auth.js";

const max = 7;
export const Dish = ({ name, ingredients, price }) => {
    const { count, increment, decrement, limitReached } = useCount(max);

    const { user } = useAuth();

    return (
        <>
            {name} ({ingredients.join(", ")}) - <span className={styles.price}>{price}</span>
            {user.auth && (
                <div className={styles.count}>
                    <Count count={count} increment={increment} decrement={decrement} limitReached={limitReached} />
                </div>
            )}
        </>
    );
};
