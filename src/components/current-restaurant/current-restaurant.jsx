import { useSelector } from "react-redux";
import { getCurrentRestaurant } from "../../redux/current-restaurant/index.js";

export const CurrentRestaurant = () => {
    const currentRestaurant = useSelector(getCurrentRestaurant);
    if (currentRestaurant === "") {
        return null;
    }
    return (
        <>
            {">"}
            <span>{currentRestaurant}</span>
        </>
    );
};
