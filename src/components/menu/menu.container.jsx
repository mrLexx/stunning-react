import { Menu } from "./menu.jsx";
import { useSelector } from "react-redux";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { selectDishes } from "../../redux/dishes/index.js";
import { getDishesByRestaurantId } from "../../redux/dishes/get-dishes-by-restaurant-id.js";
import { useRequest } from "../../redux/ui/request/use-request.js";

export const MenuContainer = ({ id }) => {
    const menu = useSelector(selectDishes);
    const requestStatus = useRequest(getDishesByRestaurantId, id);

    if (requestStatus === "pending") {
        return <Loading position={"left"} />;
    }
    if (requestStatus === "rejected") {
        return <Error position={"left"} />;
    }

    if (!menu) {
        return null;
    }

    return <Menu menu={menu} />;
};
