import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./reviews.jsx";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/reviews/get-reviews-by-restaurant-id.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { selectReviews, selectReviewsRequestStatus } from "../../redux/reviews/index.js";
import { getUsers } from "../../redux/users/get-users.js";
import { selectUserRequestStatus } from "../../redux/users/index.js";

export const ReviewsContainer = ({ restaurantId }) => {
    const dispatch = useDispatch();
    const requestStatus = useSelector(selectReviewsRequestStatus);
    const requestStatusUser = useSelector(selectUserRequestStatus);
    const reviews = useSelector(selectReviews);

    useEffect(() => {
        dispatch(getReviewsByRestaurantId(restaurantId));
        dispatch(getUsers());
    }, [dispatch, restaurantId]);

    if (requestStatus === "pending" || requestStatusUser === "pending") {
        return <Loading position={"left"} />;
    }
    if (requestStatus === "rejected" || requestStatusUser === "rejected") {
        return <Error position={"left"} />;
    }

    return <Reviews reviews={reviews} />;
};
