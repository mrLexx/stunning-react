import { Button } from "../button/Button.jsx";
import styles from "./restaurants-tabs.module.css"

export const RestaurantsTabs = ({ restaurants, activeRestaurantId, setActiveRestaurantId }) => {

    return (
        restaurants.map((place) => (
            <div key={place.id} className={styles.tab}>
                <Button
                    text={place.name}
                    onClick={() => {
                        setActiveRestaurantId(place.id);
                    }}
                    disabled={activeRestaurantId === place.id}
                    size={"big"}
                />
            </div>

        ))

    );

}