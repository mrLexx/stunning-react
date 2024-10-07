import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../restaurant/Restaurant";
import { RestaurantsTabs } from "../restaurants-tabs/RestaurantsTabs.jsx";
import styles from "./restaurants-page.module.css"
import classNames from "classnames";


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
                <div className={classNames(styles.title)}>
                    <h1>Restaurants</h1>
                </div>
                <div className={classNames(styles.nav)}>
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
