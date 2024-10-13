import { Count } from "../count/count.jsx";
import styles from "./dish.module.css";
import { useAuth } from "../auth-context/use-auth.js";
import { useDispatch, useSelector } from "react-redux";
import { selectDisheById } from "../../redux/dishes/index.js";
import { addToCart, removeFromCart, selectAmountById } from "../../redux/ui/cart/index.js";

const max = 7;

export const Dish = ({ id }) => {
    const { name, ingredients, price } = useSelector((state) => selectDisheById(state, id));

    const { user } = useAuth();

    const amount = useSelector((state) => selectAmountById(state, id));

    const dispatch = useDispatch();

    const increment = () => dispatch(addToCart(id));
    const decrement = () => dispatch(removeFromCart(id));

    const limitReached = amount >= max;

    return (
        <>
            {name} ({ingredients.join(", ")}) - <span className={styles.price}>{price}</span>
            {user.auth && (
                <div className={styles.count}>
                    <Count count={amount} increment={increment} decrement={decrement} limitReached={limitReached} />
                </div>
            )}
        </>
    );
};
