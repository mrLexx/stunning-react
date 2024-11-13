import styles from "./menu.module.css";
import { MenuItem } from "../menu-item/menu-item.jsx";

export const Menu = ({ menu }) => {
    return (
        <ul className={styles.menu}>
            {menu.map(({ id, name, price }) => (
                <li key={id} className={styles.dish}>
                    <MenuItem id={id} name={name} price={price} />
                </li>
            ))}
        </ul>
    );
};
