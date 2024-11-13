import { Restaurant } from "./restaurant.jsx";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api.js";

export const RestaurantContainer = ({ id }) => {
    const result = useGetRestaurantByIdQuery(id);
    const { isFetching, data: restaurant, isError } = result;

    if (isFetching) {
        return <Loading />;
    }
    if (isError) {
        return <Error />;
    }

    if (!restaurant) {
        return null;
    }
    const { name, menu, reviews } = restaurant;

    return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
