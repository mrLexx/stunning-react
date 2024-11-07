import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/index.js";
import { RestaurantsTabs } from "./restaurants-tabs.jsx";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { useRequest } from "../../redux/ui/request/use-request.js";

export const RestaurantsTabsContainer = () => {
    const restaurants = useSelector(selectRestaurantsIds);
    const requestStatus = useRequest(getRestaurants);

    if (requestStatus === "pending") {
        return <Loading />;
    }
    if (requestStatus === "rejected") {
        return <Error />;
    }

    if (!restaurants.length) {
        return null;
    }

    return <RestaurantsTabs restaurants={restaurants} />;
};
