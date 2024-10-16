import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/index.js";
import { RestaurantsTabsItem } from "./restaurants-tabs-item.jsx";

export const RestaurantsTabsItemContainer = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }
    const { name } = restaurant;
    return <RestaurantsTabsItem id={id} name={name} />;
};
