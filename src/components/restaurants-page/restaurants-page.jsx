import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../restaurant/restaurant.jsx";
import { RestaurantsTabs } from "../restaurants-tabs/restaurants-tabs.jsx";
import styles from "./restaurants-page.module.css"

export const RestaurantsPage = () => {

    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurants[0].id
    );

    const activeRestaurant = restaurants.find(
        ({ id }) => id === activeRestaurantId
    );

    return (
        <>
            <div>
                <div className={styles.title}>
                    <h1>Restaurants</h1>
                </div>
                <div className={styles.nav}>
                    <RestaurantsTabs
                        restaurants={restaurants}
                        activeRestaurantId={activeRestaurantId}
                        setActiveRestaurantId={setActiveRestaurantId}
                    />
                </div>
            </div>

            {activeRestaurant && (
                <Restaurant
                    key={activeRestaurant.id}
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
        </>
    );
};
