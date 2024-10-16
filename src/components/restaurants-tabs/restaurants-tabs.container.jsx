import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants/index.js";
import { RestaurantsTabs } from "./restaurants-tabs.jsx";

export const RestaurantsTabsContainer = () => {
    const restaurants = useSelector(selectRestaurantsIds);

    if (!restaurants.length) {
        return null;
    }

    return <RestaurantsTabs restaurants={restaurants} />;
};
