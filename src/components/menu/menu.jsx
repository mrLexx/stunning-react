import styles from "./menu.module.css";
import { MenuItemContainer } from "../menu-item/menu-item.container.jsx";

export const Menu = ({ menu }) => {
    if (!menu) {
        return null;
    }
    return (
        <ul className={styles.menu}>
            {Object.keys(menu).map((dish) => (
                <li key={dish} className={styles.dish}>
                    <MenuItemContainer id={dish} name={menu[dish].name} price={menu[dish].price} />
                </li>
            ))}
        </ul>
    );
};
