import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById, selectRestaurantsRequestOneStatus } from "../../redux/restaurants/index.js";
import { Restaurant } from "./restaurant.jsx";
import { useEffect } from "react";
import { getRestaurantById } from "../../redux/restaurants/get-restaurant-by-id.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";

export const RestaurantContainer = ({ id }) => {
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    const requestStatus = useSelector(selectRestaurantsRequestOneStatus);

    useEffect(() => {
        dispatch(getRestaurantById(id));
        return () => {};
    }, [dispatch, id]);

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
