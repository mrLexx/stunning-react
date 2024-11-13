import styles from "./restaurants-tabs.module.css";
import { Outlet } from "react-router-dom";
import { RestaurantsTabsItem } from "../restaurants-tabs-item/restaurants-tabs-item.jsx";

export const RestaurantsTabs = ({ restaurants }) => {
    return (
        <>
            <div className={styles.tabs}>
                {restaurants.map(({ id, name }) => (
                    <RestaurantsTabsItem key={id} id={id} name={name} />
                ))}
            </div>
            <Outlet />
        </>
    );
};
