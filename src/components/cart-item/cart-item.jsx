import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes/index.js";

export const CartItem = ({ id, amount }) => {
    const { name } = useSelector((state) => selectDishById(state, id));
    return (
        <div>
            {name} - {amount}
        </div>
    );
};
