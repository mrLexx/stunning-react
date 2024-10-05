import { Fragment, useState } from "react";
import { Dish } from "../dish/Dish.jsx";

export const Menu = ({ menu }) => {

    if (menu.length === 0) {
        return null;
    }

    return (
        <ul>
            {menu.map((dish) => (
                <li key={dish.id}>
                    <Dish
                        name={dish.name}
                        ingredients={dish.ingredients}
                        price={dish.price}
                    />
                </li>
            ))}
        </ul>
    );
}