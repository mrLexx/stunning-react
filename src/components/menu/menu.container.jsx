import { Menu } from "./menu.jsx";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api/api.js";

export const MenuContainer = ({ restaurantId }) => {
    const result = useGetDishesByRestaurantIdQuery(restaurantId);
    const { isFetching, data: menu, isError } = result;

    if (isFetching) {
        return <Loading position={"left"} />;
    }
    if (isError) {
        return <Error position={"left"} />;
    }

    if (!menu?.length) {
        return null;
    }

    return <Menu menu={menu} />;
};
