import { MenuItem } from "./menu-item.jsx";

export const MenuItemContainer = ({ id, name, price }) => {
    if (!id || !name || !price) {
        return null;
    }

    return <MenuItem id={id} name={name} price={price} />;
};
