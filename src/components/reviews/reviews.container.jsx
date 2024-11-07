import { useSelector } from "react-redux";
import { Reviews } from "./reviews.jsx";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews-by-restaurant-id.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { selectReviews } from "../../redux/entities/reviews/index.js";
import { getUsers } from "../../redux/entities/users/get-users.js";
import { useRequest } from "../../redux/ui/request/use-request.js";

export const ReviewsContainer = ({ restaurantId }) => {
    const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);
    const requestStatusUser = useRequest(getUsers);
    const reviews = useSelector(selectReviews);

    if (requestStatus === "pending" || requestStatusUser === "pending") {
        return <Loading position={"left"} />;
    }
    if (requestStatus === "rejected" || requestStatusUser === "rejected") {
        return <Error position={"left"} />;
    }

    return <Reviews reviews={reviews} />;
};
