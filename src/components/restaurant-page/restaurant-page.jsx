import { useParams } from "react-router-dom";
import { RestaurantContainer } from "../restaurant/restaurant.container.jsx";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();
    return <RestaurantContainer id={restaurantId} />;
};
