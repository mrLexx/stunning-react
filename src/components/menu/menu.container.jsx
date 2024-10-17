import { Menu } from "./menu.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/index.js";

export const MenuContainer = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    const { menu } = restaurant;
    return <Menu menu={menu} />;
};
