import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/index.js";
import { Restaurant } from "./restaurant.jsx";
import { getRestaurantById } from "../../redux/restaurants/get-restaurant-by-id.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { useRequest } from "../../redux/ui/request/use-request.js";

export const RestaurantContainer = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    const requestStatus = useRequest(getRestaurantById, id);

    if (requestStatus === "pending") {
        return <Loading />;
    }
    if (requestStatus === "rejected") {
        return <Error />;
    }

    if (!restaurant) {
        return null;
    }
    const { name, menu, reviews } = restaurant;
    return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
