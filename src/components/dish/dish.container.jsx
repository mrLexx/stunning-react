import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes/index.js";
import { Dish } from "./dish.jsx";
import { addToCart, removeFromCart, selectAmountById } from "../../redux/ui/cart/index.js";

const max = 7;

export const DishContainer = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));

    const amount = useSelector((state) => selectAmountById(state, id));
    const dispatch = useDispatch();
    const increment = () => dispatch(addToCart(id));
    const decrement = () => dispatch(removeFromCart(id));

    if (!dish) {
        return null;
    }
    const { name, ingredients, price } = dish;
    return <Dish name={name} ingredients={ingredients} price={price} amount={amount} decrement={decrement} increment={increment} max={max} />;
};
