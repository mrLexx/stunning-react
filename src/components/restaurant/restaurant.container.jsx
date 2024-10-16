import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/index.js";
import { Restaurant } from "./restaurant.jsx";

export const RestaurantContainer = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }
    const { name, menu, reviews } = restaurant;
    return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
