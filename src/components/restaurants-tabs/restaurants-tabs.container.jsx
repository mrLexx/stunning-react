import { RestaurantsTabs } from "./restaurants-tabs.jsx";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { useGetRestaurantsQuery } from "../../redux/services/api/api.js";

export const RestaurantsTabsContainer = () => {
    const result = useGetRestaurantsQuery(undefined);
    const { isFetching, data: restaurants, isError } = result;

    if (isFetching) {
        return <Loading />;
    }
    if (isError) {
        return <Error />;
    }

    if (!restaurants.length) {
        return null;
    }

    return <RestaurantsTabs restaurants={restaurants} />;
};
