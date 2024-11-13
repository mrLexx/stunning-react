import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./dish.jsx";
import { addToCart, removeFromCart, selectAmountById } from "../../redux/ui/cart/index.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { useGetDishByIdQuery } from "../../redux/services/api/api.js";

const max = 7;

export const DishContainer = ({ id }) => {
    const result = useGetDishByIdQuery(id);
    const { isFetching, data: dish, isError } = result;

    const amount = useSelector((state) => selectAmountById(state, id));
    const dispatch = useDispatch();
    const increment = () => dispatch(addToCart(id));
    const decrement = () => dispatch(removeFromCart(id));

    if (isFetching) {
        return <Loading position={"left"} />;
    }
    if (isError) {
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
