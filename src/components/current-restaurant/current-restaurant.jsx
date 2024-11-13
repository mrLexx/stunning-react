import { useParams } from "react-router-dom";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api.js";

export const CurrentRestaurant = () => {
    const { restaurantId } = useParams();

    const { isFetching, data: restaurant, isError } = useGetRestaurantByIdQuery(restaurantId);

    if (isFetching) {
        return (
            <>
                {">"}
                <span>...</span>
            </>
        );
    }
    if (isError || !restaurant) {
        return null;
    }
    const { name } = restaurant;

    return (
        <>
            {">"}
            <span>{name}</span>
        </>
    );
};
