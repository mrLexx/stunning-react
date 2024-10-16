import styles from "./menu-item.module.css";
import { Link } from "react-router-dom";

export const MenuItem = ({ id, name, price }) => {
    return (
        <>
            <Link to={`/dish/${id}`}>
                {name} - <span className={styles.price}>{price}</span>
            </Link>
        </>
    );
};
