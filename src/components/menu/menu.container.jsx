import { Menu } from "./menu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { selectDishes, selectDishesRequestStatus } from "../../redux/dishes/index.js";
import { getDishesByRestaurantId } from "../../redux/dishes/get-dishes-by-restaurant-id.js";

export const MenuContainer = ({ id }) => {
    const dispatch = useDispatch();
    const menu = useSelector(selectDishes);
    const requestStatus = useSelector(selectDishesRequestStatus);

    useEffect(() => {
        dispatch(getDishesByRestaurantId(id));
    }, [dispatch, id]);

    if (requestStatus === "pending") {
        return <Loading />;
    }
    if (requestStatus === "rejected") {
        return <Error />;
    }

    if (!menu) {
        return null;
    }

    return <Menu menu={menu} />;
};
