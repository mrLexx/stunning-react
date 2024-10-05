import { useEffect, useState } from "react";
import { restaurants } from "../../materials/mock";
import { Nav } from "../nav/Nav";
import { Restaurant } from "../restaurant/Restaurant";
import { RestaurantsTabs } from "../restaurants-tabs/RestaurantsTabs.jsx";

export const RestaurantsPage = () => {

    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurants[0].id
    );

    const activeRestaurant = restaurants.find(
        ({ id }) => id === activeRestaurantId
    );

    return (
        <>
            <div className={"container text-center pb-3 pt-3"}><h1>Restaurants</h1></div>
            <div className={"container"}>
                <RestaurantsTabs
                    restaurants={restaurants}
                    activeRestaurantId={activeRestaurantId}
                    setActiveRestaurantId={setActiveRestaurantId}
                />

                {activeRestaurant && (
                    <Restaurant
                        key={activeRestaurant.id}
                        name={activeRestaurant.name}
                        menu={activeRestaurant.menu}
                        reviews={activeRestaurant.reviews}
                    />
                )}
            </div>
        </>
    );
};
