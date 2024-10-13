import styles from "./restaurants-tabs.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants/index.js";
import { RestaurantsTab } from "../restaurants-tab/restaurants-tab.jsx";

export const RestaurantsTabs = ({ activeRestaurantId, setActiveRestaurantId }) => {
    const restaurants = useSelector(selectRestaurantsIds);

    if (!restaurants.length) {
        return null;
    }

    return restaurants.map((id) => (
        <div key={id} className={styles.tab}>
            <RestaurantsTab id={id} onClick={() => setActiveRestaurantId(id)} isActive={activeRestaurantId === id} />
        </div>
    ));
};
