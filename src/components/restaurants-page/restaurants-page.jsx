import { useState } from "react";

import { Restaurant } from "../restaurant/restaurant.jsx";
import { RestaurantsTabs } from "../restaurants-tabs/restaurants-tabs.jsx";
import styles from "./restaurants-page.module.css";
import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button.jsx";
import { ToggleAuthButton } from "../toggle-auth-button/toggle-auth-button.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants/index.js";
import { Cart } from "../cart/cart.jsx";

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);

    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

    return (
        <>
            <div>
                <div className={styles.title}>
                    <h1>Restaurants</h1>
                    <div>
                        <ToggleAuthButton />
                        <ToggleThemeButton />
                    </div>
                </div>
                <div className={styles.title}>
                    <Cart />
                </div>
                <div className={styles.nav}>
                    <RestaurantsTabs activeRestaurantId={activeRestaurantId} setActiveRestaurantId={setActiveRestaurantId} />
                </div>
            </div>

            <Restaurant id={activeRestaurantId} />
        </>
    );
};
