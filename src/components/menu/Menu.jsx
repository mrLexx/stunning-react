import { Dish } from "../dish/Dish.jsx";
import styles from "./menu.module.css"
import classNames from "classnames";

export const Menu = ({ menu }) => {

    if (menu.length === 0) {
        return null;
    }

    return (
        <ul className={classNames(styles.menu)}>
            {menu.map((dish) => (
                <li key={dish.id} className={classNames(styles.dish)}>
                    <Dish
                        name={dish.name}
                        ingredients={dish.ingredients}
                        price={dish.price}
                    />
                </li>
            ))}
        </ul>
    );
}