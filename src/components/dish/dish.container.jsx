import { useDispatch, useSelector } from "react-redux";
import { selectDishById, selectDishesRequestStatus } from "../../redux/dishes/index.js";
import { Dish } from "./dish.jsx";
import { addToCart, removeFromCart, selectAmountById } from "../../redux/ui/cart/index.js";
import { useEffect } from "react";
import { getDishById } from "../../redux/dishes/get-dish-by-id.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";

const max = 7;

export const DishContainer = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));
    const requestStatus = useSelector(selectDishesRequestStatus);
    const amount = useSelector((state) => selectAmountById(state, id));
    const dispatch = useDispatch();
    const increment = () => dispatch(addToCart(id));
    const decrement = () => dispatch(removeFromCart(id));

    useEffect(() => {
        dispatch(getDishById(id));
    }, [dispatch, id]);

    if (requestStatus === "pending") {
        return <Loading position={"left"} />;
    }
    if (requestStatus === "rejected") {
        return <Error position={"left"} />;
    }
    if (!dish) {
        return null;
    }
    const { name, ingredients, price } = dish;
    return (
        <Dish
            name={name}
            ingredients={ingredients}
            price={price}
            amount={amount}
            decrement={decrement}
            increment={increment}
            max={max}
        />
    );
};
