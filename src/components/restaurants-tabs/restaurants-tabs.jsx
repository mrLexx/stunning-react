import styles from "./restaurants-tabs.module.css";
import { Outlet } from "react-router-dom";
import { RestaurantsTabsItemContainer } from "../restaurants-tabs-item/restaurants-tabs-item.container.jsx";

export const RestaurantsTabs = ({ restaurants }) => {
    return (
        <>
            <div className={styles.tabs}>
                {restaurants.map((id) => (
                    <RestaurantsTabsItemContainer id={id} key={id} />
                ))}
            </div>
            <Outlet />
        </>
    );
};
