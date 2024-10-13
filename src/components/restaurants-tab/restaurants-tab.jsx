import { Button } from "../button/button.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/index.js";

export const RestaurantsTab = ({ id, onClick, isActive }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    return <Button text={restaurant.name} onClick={onClick} disabled={isActive} size={"big"} />;
};
