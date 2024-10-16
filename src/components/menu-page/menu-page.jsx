import { useParams } from "react-router-dom";
import { MenuContainer } from "../menu/menu.container.jsx";
import styles from "./menu-page.module.css";

export const MenuPage = () => {
    const { restaurantId } = useParams();

    return (
        <>
            <h4 className={styles.subTitle}>Menu</h4>
            <MenuContainer id={restaurantId} />
        </>
    );
};
