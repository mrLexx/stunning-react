import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes/index.js";
import { MenuItem } from "./menu-item.jsx";

export const MenuItemContainer = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));
    if (!dish) {
        return null;
    }
    const { name, price } = dish;

    return <MenuItem id={id} name={name} price={price} />;
};
