import { Nav } from "../nav/Nav.jsx";

export const RestaurantsTabs = ({ restaurants, activeRestaurantId, setActiveRestaurantId }) => {

    return (<ul className="nav nav-underline nav-fill pb-5 pt-2">
        {restaurants.map((place) => (
            <li className="nav-item" key={place.id}>
                <Nav
                    name={place.name}
                    isActive={activeRestaurantId === place.id}
                    setActive={() => {
                        setActiveRestaurantId(place.id);
                    }}
                />
            </li>
        ))}
    </ul>);

}