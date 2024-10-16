import { useParams } from "react-router-dom";
import { DishContainer } from "../dish/dish.container.jsx";

export const DishPage = () => {
    const { dishId } = useParams();
    return <DishContainer id={dishId} />;
};
