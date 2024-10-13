import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart";
import { CartItem } from "../cart-item/cart-item.jsx";
import styles from "./cart.module.css";

export const Cart = () => {
    const items = useSelector(selectCartItems);

    if (!items.length) {
        return null;
    }

    return (
        <ul className={styles.cart}>
            {items.map((item) => (
                <li key={item.id} className={styles.order}>
                    <CartItem id={item.id} amount={item.amount} />
                </li>
            ))}
        </ul>
    );
};
