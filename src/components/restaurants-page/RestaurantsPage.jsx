import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Nav } from "../nav/Nav";
import { Restaurant } from "../restaurant/Restaurant";

export const RestaurantsPage = () => {

    const [currentRestaurantId, setCurrentRestaurantId] = useState(
        restaurants[0].id
    );

    const activeRestaurant = restaurants.find(
        ({ id }) => id === currentRestaurantId
    );

    return (
        <>
            <div className={"container text-center pb-3 pt-3"}><h1>Restaurants</h1></div>
            <div className={"container"}>
                <ul className="nav nav-underline nav-fill pb-5 pt-2">
                    {restaurants.map((place) => (
                        <li className="nav-item" key={place.id}>
                            <Nav
                                name={place.name}
                                isActive={currentRestaurantId === place.id}
                                setActive={() => {
                                    setCurrentRestaurantId(place.id);
                                }}
                            />
                        </li>
                    ))}
                </ul>

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
