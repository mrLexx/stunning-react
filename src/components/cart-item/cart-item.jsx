import { useGetDishByIdQuery } from "../../redux/services/api/api.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";

export const CartItem = ({ id, amount }) => {
    const { isFetching, data: dish, isError } = useGetDishByIdQuery(id);

    if (isFetching) {
        return <Loading position={"left"} />;
    }
    if (isError) {
        return <Error position={"left"} />;
    }
    if (!dish) {
        return null;
    }

    const { name } = dish || {};

    return (
        <div>
            {name} - {amount}
        </div>
    );
};
