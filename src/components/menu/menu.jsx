import { Dish } from "../dish/dish.jsx";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
    if (!menu) {
        return null;
    }

    return (
        <ul className={styles.menu}>
            {menu.map((dish) => (
                <li key={dish} className={styles.dish}>
                    <Dish id={dish} />
                </li>
            ))}
        </ul>
    );
};
