import { Dish } from "../dish/dish.jsx";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
    if (menu.length === 0) {
        return null;
    }

    return (
        <ul className={styles.menu}>
            {menu.map((dish) => (
                <li key={dish.id} className={styles.dish}>
                    <Dish name={dish.name} ingredients={dish.ingredients} price={dish.price} />
                </li>
            ))}
        </ul>
    );
};
