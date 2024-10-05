import { Fragment, useState } from "react";
import { Dish } from "../dish/Dish.jsx";

export const Menu = ({ menu }) => {

    const [moreDishes, setMoreDishes] = useState(false);

    return (menu.length > 0 && (
            <>
                <button
                    className={"btn btn-outline-primary btn-sm mb-2"}
                    onClick={() => setMoreDishes(!moreDishes)}
                >{moreDishes ? `Remove extra dishes` : `Add more dishes for progreess bar`}
                </button>

                <ul>
                    {moreDishes ? [...Array(10)].map((x, i) => {
                        return <Fragment key={i}>
                            {menu.map((dish) => (
                                <li key={dish.id}>
                                    <Dish
                                        name={dish.name}
                                        ingredients={dish.ingredients}
                                        price={dish.price}
                                    />
                                </li>
                            ))}
                        </Fragment>
                    }) : menu.map((dish) => (
                        <li key={dish.id}>
                            <Dish
                                name={dish.name}
                                ingredients={dish.ingredients}
                                price={dish.price}
                            />
                        </li>
                    ))}
                </ul>
            </>
        )
    );
}