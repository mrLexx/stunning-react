import { Count } from "../count/count.jsx";
import styles from "./dish.module.css";
import { useAuth } from "../auth-context/use-auth.js";
import { Link } from "react-router-dom";

export const Dish = ({ name, ingredients, price, amount, increment, decrement, max }) => {
    const { user } = useAuth();

    const limitReached = amount >= max;

    return (
        <>
            <Link to={-1}>Back</Link> <h2>{name} </h2>
            <ul>
                {ingredients.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
            <div>
                Price: <span className={styles.price}>{price}</span>
                {user.auth && (
                    <div className={styles.count}>
                        <Count count={amount} increment={increment} decrement={decrement} limitReached={limitReached} />
                    </div>
                )}
            </div>
        </>
    );
};
