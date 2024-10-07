import { Button } from "../button/Button.jsx";

export const RestaurantsTabs = ({ restaurants, activeRestaurantId, setActiveRestaurantId }) => {

    return (
        restaurants.map((place) => (
            <Button
                key={place.id}
                text={place.name}
                onClick={() => {
                    setActiveRestaurantId(place.id);
                }}
                disabled={activeRestaurantId === place.id}
                size={"big"}
            />

        ))

    );

}