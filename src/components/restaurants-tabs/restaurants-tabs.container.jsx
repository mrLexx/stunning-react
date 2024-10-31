import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsIds, selectRestaurantsRequestStatus } from "../../redux/restaurants/index.js";
import { RestaurantsTabs } from "./restaurants-tabs.jsx";
import { getRestaurants } from "../../redux/restaurants/get-restaurants.js";
import { useEffect } from "react";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";

export const RestaurantsTabsContainer = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(selectRestaurantsIds);
    const requestStatus = useSelector(selectRestaurantsRequestStatus);

    useEffect(() => {
        dispatch(getRestaurants());

        return () => {};
    }, [dispatch]);

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
