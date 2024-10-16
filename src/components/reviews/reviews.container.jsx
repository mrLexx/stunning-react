import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/index.js";
import { Reviews } from "./reviews.jsx";

export const ReviewsContainer = ({ restaurantId }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
        return null;
    }
    const { reviews } = restaurant;

    return <Reviews reviews={reviews} />;
};
