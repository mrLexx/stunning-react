import { useSelector } from "react-redux";
import { selectDisheById } from "../../redux/dishes/index.js";

export const CartItem = ({ id, amount }) => {
    const { name } = useSelector((state) => selectDisheById(state, id));
    return (
        <div>
            {name} - {amount}
        </div>
    );
};
